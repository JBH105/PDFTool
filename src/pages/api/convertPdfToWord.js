import formidable from 'formidable';
import fs from 'fs';
import { PDFDocument } from 'pdf-lib';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({
      multiples: true, // Enable multipart file uploads
      // maxFileSize: 20 * 1024 * 1024, // Set a reasonable maximum file size (e.g., 10MB)
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Formidable error:', err);
        res.status(500).send('Formidable error');
        return;
      }

      if (!files || !files.pdf) {
        res.status(400).send('No PDF file provided.');
        return;
      }

      const pdfFile = files.pdf;

      try {
        const pdfData = fs.readFileSync(pdfFile.path);
        const pdfDoc = await PDFDocument.load(pdfData);
        const pdfPages = pdfDoc.getPages();
        const pdfPage = pdfPages[0];

        // Create a new PDF document with the same page size
        const pdfDoc2 = await PDFDocument.create();
        const [width, height] = pdfPage.getSize();
        const newPage = pdfDoc2.addPage([width, height]);

        // Copy the content from the original page
        newPage.drawPage(pdfPage);

        // Serialize the new PDF as a buffer
        const pdfBytes2 = await pdfDoc2.save();

        const outputPath = path.join(process.cwd(), 'public', `converted.docx`);
        fs.writeFileSync(outputPath, pdfBytes2);

        res.download(outputPath, 'converted.docx', (downloadErr) => {
          if (downloadErr) {
            console.error('Download error:', downloadErr);
            res.status(500).send('Download error');
          }

          fs.unlink(outputPath, () => {
            // Clean up generated files
          });
        });
      } catch (error) {
        console.error('Conversion error:', error);
        res.status(500).send('Conversion error');
      }
    });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
