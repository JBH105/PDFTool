import React, { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { BiTrash } from "react-icons/bi";
import GlobalContext from "@/contexts/GlobalContext";
import { useDropzone } from "react-dropzone";
import { PDFDocument } from "pdf-lib";

export default function FIleUpload({ size }) {
  const { CropFile, cropURL, setCropURL, loader, setLoader, DeleteFile } =
    useContext(GlobalContext);
  const [pdfFiles, setPdfFiles] = useState([]);
  // Drop File
  const onDrop = useCallback((acceptedFiles) => {
    setCropURL("");
    const pdfFilesArray = acceptedFiles.filter(
      (file) => file.type === "application/pdf"
    );
    setPdfFiles(pdfFilesArray);
  }, []);
  // Remove File
  const onRemoveFile = (index) => {
    setCropURL("");
    const updatedFiles = [...pdfFiles];
    updatedFiles.splice(index, 1);
    setPdfFiles(updatedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf",
    multiple: true, // Allow multiple file uploads
  });
  // Merge File
  const mergePDF = async () => {
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
      const blob = new Blob([mergedPdfBytes], { type: "application/pdf" });
      const downloadLink = URL.createObjectURL(blob);

      console.log(downloadLink, "downloadLink");

      const mergedPdfFile = new File([mergedPdfBytes], "MergedFile.pdf", {
        type: "application/pdf",
        lastModified: new Date().getTime(), // Set the last modified time as the current time
      });
      setLoader(false);
      return mergedPdfFile;
    } catch (error) {
      setLoader(false);
      console.error("Error while merging PDFs:", error);
    }
  };
  // Crop File
  const handleConvertFile = async () => {
    const file = await mergePDF();
    console.log(file, "file");

    // Create a FormData and append the Blob
    const formData = new FormData();
    // formData.append('pdf_file', mergedBlob, 'merged.pdf');

    formData.append("pdf_file", file);
    formData.append("x", "180.174");
    formData.append("y", "815.1739");
    formData.append("width", size?.widthsize);
    formData.append("height", size?.heightsize);

    // formData.append("width", "235");
    // formData.append("height", "355.6088");

    const data = await CropFile(formData);
  };
  // Delete File
  const HandleDeleteFile = () => {
    setPdfFiles([]);
    setTimeout(async () => {
      await DeleteFile(cropURL.file_name);
    }, 5000);
  };
  return (
    <div>
      <div className='relative my-[40px] sm:my-[60px] after:absolute after:content-[" "] after:shadow-red after:right-0 after:top-0 after:block after:h-[288px] after:w-[288px] after:rounded-[50%]'>
        <div className="shadow-dark bg-white p-3 sm:p-5 z-[3] relative rounded-2xl">
          <div
            className={`border px-4 border-slate-300 flex flex-col items-center justify-evenly min-h-[250px] sm:min-h-[332px]  rounded-lg border-blue-500`}
          >
            <div {...getRootProps()}>
              <div className="dropzone">
                <div className="justify-center lg:pt-6 flex">
                  <Image
                    src="/assets/upload.png"
                    width={100}
                    height={100}
                    className="w-[100px] sm:w-[100px]"
                    alt="file"
                  />
                </div>
                <h3 className="lg:text-[32px] sm:text-[28] text-[18px] text-[#171717] font-bold">
                  Drag and drop PDF files here, or click to select files
                </h3>
              </div>
              <p className="text-[10px] mt-6 sm:text-xs  text-gray-400">
                Upload documents of up to 10 MB in PDF
              </p>
            </div>
            <input {...getInputProps()} />

            {pdfFiles.length > 0 && (
              <div className="preview mt-4">
                {pdfFiles.map((file, index) => {
                  const fileName =
                    file?.name?.length > 12
                      ? `${file?.name?.slice(0, 12)}...`
                      : file?.name;

                  return (
                    <div key={index}>
                      <div className="pdf-preview w-[100px]" key={index}>
                        <object
                          className="custom-scrollbars__content"
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

            {pdfFiles.length > 0 && !cropURL ? (
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
            ) : (
              pdfFiles.length > 0 && (
                <a
                  href={cropURL?.file_url}
                  target="_blank"
                  rel="noreferrer"
                  className="py-6"
                >
                  <button
                    className="flex gap-4 bg-[#3661e3] hover:bg-[#4f79f9] transition focus:ring-2 outline-none focus:ring-[#3661e391] focus:ring-offset-2 text-white text-[14px] sm:text-[18px] rounded px-8 py-2.5"
                    onClick={HandleDeleteFile}
                  >
                    Download
                  </button>
                </a>
              )
            )}
          </div>
        </div>
        <div className="absolute h-[235px] w-[241px] shadow-blue left-0 top-[39px] rounded-[50%]"></div>
      </div>
    </div>
  );
}
