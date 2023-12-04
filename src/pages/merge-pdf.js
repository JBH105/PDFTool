import FIleUpload from "@/components/FIleUpload";
import Merge from "@/components/Merge";
import GlobalContext from "@/contexts/GlobalContext";
import Head from "next/head";
import React, { useContext } from "react";

export default function MergePdf() {
  const { selectTab, setSelectTab } = useContext(GlobalContext);

  return (
    <div>
      <Head>
        <title>{selectTab?.name}</title>
      </Head>
      <div className="py-5 min-h-[90vh]">
        <div className="px-3 text-center max-w-5xl mx-auto">
          <h1 className="mt-[30px] sm:mt-[56px] relative z-[3] text-[28px] sm:text-[32px] font-bold leading-[44px] md:text-[48px] lg:leading-[60px] text-gray-600 lg:mt-[76px] ">
            Welcome to PDF Merge - Simplify Your PDF Merging!
          </h1>
          <h3 className="mt-[20px] font-bold text-gray-500">
            Are you tired of juggling multiple PDF files and struggling with
            complex merging tools? Look no further! PDF Tool now offers a
            dedicated PDF merging feature to streamline your PDF merging
            experience. Our user-friendly website makes it a breeze to merge
            PDFs with precision and ease. Here's how it works:
          </h3>

          <Merge />
        </div>
        <div className="px-3 max-w-5xl mx-auto relative">
          <p className="text-[22px] font-bold text-gray-800">
            How to Use PDF Merge:
          </p>
          <div className="mt-[30px]">
            <span className="text-[18px] font-bold text-gray-700">
              1. Upload Your Files:
            </span>
            <span className="pl-[5px] text-gray-900">
              Start by uploading the PDF files you want to merge. Our system
              will quickly process your files, making them ready for merging.
            </span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">
              2. Arrange the Order:
            </span>
            <span className="pl-[5px] text-gray-900">
              Use our intuitive merging tool to arrange the PDF files in the
              order you want them to appear in the merged document. You can
              easily reorder, add, or remove files as needed.
            </span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">
              3. Wait for Upload to Complete:
            </span>
            <span className="pl-[5px] text-gray-900">
              Our efficient system will handle the file upload process
              seamlessly. Sit back and relax while we prepare your PDFs for
              merging.
            </span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">
              4. Press Proceed Button:
            </span>
            <span className="pl-[5px] text-gray-900">
              Once you're satisfied with the order of your PDF files, hit the
              "Proceed" button. PDF Merge will start processing your PDFs
              according to your specifications.
            </span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">
              5. Wait for Process to Complete:
            </span>
            <span className="pl-[5px] text-gray-900">
              Our powerful processing engine will swiftly merge your PDFs,
              ensuring a seamless and accurate result. You'll be notified when
              the process is done.
            </span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">
              6. Get Your Merged PDF:
            </span>
            <span className="pl-[5px] text-gray-900">
              Voilà! Your merged PDF is ready for download. Enjoy your
              consolidated documents, hassle-free.
            </span>
          </div>
          <div className="mt-[25px] mb-[20px] text-center">
            <span className="font-bold text-[18px] text-gray-600">
              PDF Merge is designed to save you time and effort when merging
              PDFs. Say goodbye to complex software and hello to a simple,
              efficient solution for all your merging needs. Try PDF Merge today
              and experience the difference!
            </span>
            <br />
            <span className="font-bold text-[18px] text-gray-600">
              With PDF Merge, you can now effortlessly merge PDF files using our
              user-friendly platform. It's the perfect solution for all your PDF
              merging needs.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
