import React, { useCallback, useContext, useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import axios from "axios";
import Image from "next/image";
import { BiCopy, BiSolidCopy, BiTrash } from "react-icons/bi";
import GlobalContext from "@/contexts/GlobalContext";
import { useDropzone } from "react-dropzone";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocument } from "pdf-lib";

export default function Merge() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [pdfFiles, setPdfFiles] = useState([]);
  const [mergedPdf, setMergedPdf] = useState(null);
  const [loader, setLoader] = useState(false);

  const onRemoveFile = (index) => {
    const updatedFiles = [...pdfFiles];
    updatedFiles.splice(index, 1);
    setPdfFiles(updatedFiles);
  };

  const Drop = (event) => {
    event.preventDefault();
    const fromIndex = parseInt(event.dataTransfer.getData("fromIndex"), 10);
    const toIndex = parseInt(event.target.dataset.index, 10);

    if (!isNaN(fromIndex) && !isNaN(toIndex) && fromIndex !== toIndex) {
      const updatedFiles = [...pdfFiles];
      const [movedFile] = updatedFiles.splice(fromIndex, 1);
      updatedFiles.splice(toIndex, 0, movedFile);
      setPdfFiles(updatedFiles);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    const pdfFilesArray = acceptedFiles.filter(
      (file) => file.type === "application/pdf"
    );
    setPdfFiles(pdfFilesArray);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf",
    multiple: true, // Allow multiple file uploads
  });

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const onDragStart = (event, fromIndex) => {
    event.dataTransfer.setData("fromIndex", fromIndex);
  };

  const mergePDFs = async () => {
    try {
      setLoader(true);
      const pdfDoc = await PDFDocument.create();

      for (const pdfFile of pdfFiles) {
        const existingPdfBytes = await pdfFile.arrayBuffer();
        const existingPdfDoc = await PDFDocument.load(existingPdfBytes);

        const copiedPages = await pdfDoc.copyPages(
          existingPdfDoc,
          existingPdfDoc.getPageIndices()
        );

        for (const copiedPage of copiedPages) {
          pdfDoc.addPage(copiedPage);
        }
      }

      const mergedPdfBytes = await pdfDoc.save();
      setMergedPdf(new Blob([mergedPdfBytes], { type: "application/pdf" }));
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.error("Error while merging PDFs:", error);
    }
  };

  const downloadMergedPDF = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(mergedPdf);
    a.download = "merged.pdf";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <div className='relative my-[40px] sm:my-[60px] after:absolute after:content-[" "] after:shadow-red after:right-0 after:top-0 after:block after:h-[288px] after:w-[288px] after:rounded-[50%]'>
        <div className="shadow-dark bg-white p-3 sm:p-5 z-[3] relative rounded-2xl">
          <div
            className={`border px-4 border-slate-300 flex flex-col items-center justify-evenly min-h-[250px] sm:min-h-[332px]  rounded-lg`}
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
              <div
                className="preview mt-4"
                onDrop={Drop}
                onDragOver={allowDrop}
              >
                {pdfFiles.map((file, index) => {
                  const fileName =
                    file?.name?.length > 12
                      ? `${file?.name?.slice(0, 12)}...`
                      : file?.name;

                  return (
                    <div key={index}>
                      <div
                        className="pdf-preview w-[100px]"
                        key={index}
                        draggable
                        onDragStart={(event) => onDragStart(event, index)}
                        data-index={index}
                        onDragOver={allowDrop}
                        onDrop={Drop}
                        style={{ cursor: "move" }}
                      >
                        <object
                          width="100px"
                          height="100px"
                          data={URL.createObjectURL(file)}
                        ></object>
                        <button
                          className="remove-button z-[9999999]"
                          onClick={() => onRemoveFile(index)}
                        >
                          <BiTrash />
                        </button>
                      </div>
                      <p>{fileName}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {pdfFiles.length > 0 && mergedPdf === null ? (
              <div className="p-5">
                {loader ? (
                  <div className="spinner"></div>
                ) : (
                  <button
                    className="flex gap-4 bg-[#3661e3] hover:bg-[#4f79f9] transition focus:ring-2 outline-none focus:ring-[#3661e391] focus:ring-offset-2 text-white text-[14px] sm:text-[18px] rounded px-8 py-2.5"
                    onClick={mergePDFs}
                  >
                    Merge PDFs
                  </button>
                )}
              </div>
            ) : (
              pdfFiles.length > 0 && (
                <button
                  className="flex mb-6 gap-4 bg-[#3661e3] hover:bg-[#4f79f9] transition focus:ring-2 outline-none focus:ring-[#3661e391] focus:ring-offset-2 text-white text-[14px] sm:text-[18px] rounded px-8 py-2.5"
                  onClick={downloadMergedPDF}
                >
                  Download Merged PDF
                </button>
              )
            )}
          </div>
        </div>
        <div className="absolute h-[235px] w-[241px] shadow-blue left-0 top-[39px] rounded-[50%]"></div>
      </div>
    </div>
  );
}
