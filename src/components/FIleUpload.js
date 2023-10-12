import React, { useCallback, useContext, useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import axios from "axios";
import Image from "next/image";
import { BiCopy, BiSolidCopy, BiTrash } from "react-icons/bi";
import GlobalContext from "@/contexts/GlobalContext";
import { useDropzone } from "react-dropzone";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocument } from "pdf-lib";

export default function FIleUpload() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const { selectTab, setSelectTab, CropFile, cropURL } =
    useContext(GlobalContext);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [convertURL, setConvertURL] = useState(false);
  const [loader, setLoader] = useState(false);
  const [url, setUrl] = useState("");
  const [copyurl, setCopyUrl] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [mergedFile, setMergedFile] = useState();

  const [pdfFiles, setPdfFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const pdfFilesArray = acceptedFiles.filter(
      (file) => file.type === "application/pdf"
    );
    setPdfFiles(pdfFilesArray);
    mergePDF();
  }, []);

  const removeFile = (index) => {
    const updatedFiles = [...pdfFiles];
    updatedFiles.splice(index, 1);
    setPdfFiles(updatedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf",
    multiple: true, // Allow multiple file uploads
  });

  const mergePDF = async () => {
    try {
      // Load and merge the uploaded PDFs
      const mergedDoc = await PDFDocument.create();
      for (const file of pdfFiles) {
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
      setDownloadUrl(downloadLink);
    } catch (error) {
      console.error(error);
    }
  };

  const copyToClipboard = () => {
    copy(url);
    setCopyUrl(true);
  };
  async function pdfDocumentToBlob(pdfDoc) {
    const pdfBytes = await pdfDoc.save();
    return new Blob([pdfBytes], { type: "application/pdf" });
  }

  const handleConvertFile = async () => {
    setLoader(true);
    const mergedBlob = await pdfDocumentToBlob(mergedFile);

    // Create a FormData and append the Blob
    const formData = new FormData();
    // formData.append('pdf_file', mergedBlob, 'merged.pdf');

    formData.append("pdf_file", pdfFiles[0]);
    formData.append("x", "187.174");
    formData.append("y", "810.1739");
    formData.append("width", "220.0435");
    formData.append("height", "355.6088");

    const data = await CropFile(formData);
    setLoader(false);
  };

  return (
    <div>
      <div className='relative my-[40px] sm:my-[60px] after:absolute after:content-[" "] after:shadow-red after:right-0 after:top-0 after:block after:h-[288px] after:w-[288px] after:rounded-[50%]'>
        <div className="shadow-dark bg-white p-3 sm:p-5 z-[3] relative rounded-2xl">
          <div
            className={`border px-4 border-slate-300 flex flex-col items-center justify-evenly min-h-[250px] sm:min-h-[332px]  rounded-lg ${
              isDragging ? "border-blue-500" : ""
            }`}
          >
            <div {...getRootProps()} className="dropzone pt-2">
              <div className="justify-center flex">
                <Image
                  src="/assets/icons/icons8-upload-document-96.png"
                  width={50}
                  height={80}
                  className="w-[40px] sm:w-[50px]"
                  alt="file"
                />
              </div>
              <input {...getInputProps()} />
              <h3 className="lg:text-[32px] hidden md:block sm:text-[28] text-[20px] text-[#171717] font-bold">
                Drag and drop PDF files here, or click to select files
              </h3>
            </div>
            <p className="text-[10px] sm:text-xs  text-gray-400">
              Upload documents of up to 10 MB in PDF, DOC, DOCX, RTF, PPT, PPTX,
              JPEG, PNG, or TXT
            </p>
            {pdfFiles.length > 0 && (
              <div className="preview mt-4">
                {pdfFiles.map((file, index) => {
                  const elementToRemove = document.querySelector(
                    ".react-pdf__Page__annotations"
                  );
                  if (elementToRemove) {
                    elementToRemove.remove();
                  }
                  return (
                    <div key={index}>
                      <div className="pdf-preview w-[100px]">
                        <object
                          width="100px"
                          height="100px"
                          data={URL.createObjectURL(file)}
                        ></object>
                        <button
                          className="remove-button z-[9999999]"
                          onClick={() => removeFile(index)}
                        >
                          <BiTrash />
                        </button>
                      </div>
                      <p>{file.name}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {pdfFiles.length > 0 && (
              <div className="p-5">
                {loader ? (
                  <div className="spinner"></div>
                ) : (
                  <button
                    className="flex gap-4 bg-[#3661e3] hover:bg-[#4f79f9] transition focus:ring-2 outline-none focus:ring-[#3661e391] focus:ring-offset-2 text-white text-[14px] sm:text-[18px] rounded px-8 py-2.5"
                    onClick={handleConvertFile}
                  >
                    Crop File
                  </button>
                )}
              </div>
            )}
          </div>
          {cropURL && (
            <a href={cropURL?.file_url} target="_blank" rel="noreferrer">
              <h3>View Merged PDF</h3>
            </a>
          )}
        </div>
        <div className="absolute h-[235px] w-[241px] shadow-blue left-0 top-[39px] rounded-[50%]"></div>
      </div>
    </div>
  );
}
