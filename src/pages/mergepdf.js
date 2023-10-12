import { PDFDocument } from "pdf-lib";
import { useState } from "react";

export default function Mergepdf() {
  const [link, setLink] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [mergedFile, setMergedFile] = useState();

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const uploadedFileArray = Array.from(files);
    setUploadedFiles(uploadedFileArray);
  };

  const mergePDF = async (event) => {
    try {
      event.preventDefault();
      // Load and merge the uploaded PDFs
      const mergedDoc = await PDFDocument.create();
      for (const file of uploadedFiles) {
        const fileArrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(fileArrayBuffer);
        const copiedPages = await mergedDoc.copyPages(
          pdfDoc,
          pdfDoc.getPageIndices()
        );
        copiedPages.forEach((page) => mergedDoc.addPage(page));
      }

      setMergedFile(mergedDoc);

      // Optionally, you can provide a download link for the merged PDF
      const mergedPdfBytes = await mergedDoc.save();
      const blob = new Blob([mergedPdfBytes], { type: "application/pdf" });
      const downloadLink = URL.createObjectURL(blob);
      console.log(
        "🚀 ~ file: mergepdf.js:38 ~ mergePDF ~ downloadLink:",
        downloadLink
      );
      setLink(downloadLink);
    } catch (error) {
      console.log("🚀 ~ file: mergepdf.js:40 ~ mergePDF ~ error:", error);
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 style={{ marginTop: "50px" }}>Merge PDFs with Next.js</h2>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <h3>View Merged PDF</h3>
        </a>
      )}
      <div className="row">
        {uploadedFiles.map((file, index) => (
          <div className="column" key={index}>
            <object
              width="100px"
              height="100px"
              data={URL.createObjectURL(file)}
            ></object>
            <br />
            {`PDF_${index + 1}`}
          </div>
        ))}
      </div>
      <input type="file" multiple onChange={handleFileUpload} />
      <button onClick={mergePDF} className="btn">
        Merge PDF
      </button>
    </div>
  );
}
