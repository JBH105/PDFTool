import FIleUpload from "@/components/FIleUpload";
import GlobalContext from "@/contexts/GlobalContext";
import Head from "next/head";
import React, { useContext } from "react";

export default function Pdf() {
  const { selectTab, setSelectTab } =
    useContext(GlobalContext);
  return (
    <div>
      <Head>
        <title>{selectTab?.name}</title>
      </Head>
      <div className="py-5 min-h-[90vh]">
        <div className="px-3 text-center max-w-5xl mx-auto">
          <h1 className="mt-[30px] sm:mt-[56px] relative z-[3] text-[28px] sm:text-[32px] font-bold leading-[44px] md:text-[48px] lg:leading-[60px] text-gray-600 lg:mt-[76px] ">
            Online file converter: convert {selectTab?.name} within moments
          </h1>
          <h3 className="mt-[20px] font-bold text-gray-500">
            Welcome to our PDF to URL conversion service! With this powerful tool, you can transform your PDF files into live URLs, making it easier than ever to share and access your documents online. Say goodbye to large file attachments and hello to seamless digital sharing.
          </h3>
          <FIleUpload />
        </div>
        <div className="px-3 max-w-5xl mx-auto relative">
          <p className="text-[22px] font-bold text-gray-800">Key Features:</p>
          <div className="mt-[30px]">
            <span className="text-[18px] font-bold text-gray-700">1. Swift Conversion:</span><span className='pl-[5px] text-gray-900'>Our advanced technology ensures speedy conversion, giving you a live URL in just a matter of seconds.</span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">2. Preserve Formatting:</span>
            <span className='pl-[5px] text-gray-900'>Rest assured that your PDF's layout, fonts, and images will remain intact in the converted URL page.
            </span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">3. Secure and Private:</span>
            <span className='pl-[5px] text-gray-900'>We prioritize the security of your files, and they will be deleted from our servers after the conversion is complete.</span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">4. Universal Access:</span>
            <span className='pl-[5px] text-gray-900'>Share your URLs with anyone, and they can access the document from any device with internet access.</span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">5. User-Friendly:</span>
            <span className='pl-[5px] text-gray-900'>Our user-friendly interface makes the conversion process simple and intuitive.</span>
          </div>

          <p className="text-[22px] mt-[50px] font-bold text-gray-800">How to Convert PDF to URL:</p>
          <div className="mt-[30px]">
            <span className="text-[18px] font-bold text-gray-700">1. Upload:</span><span className='pl-[5px] text-gray-900'>Select the PDF file you want to convert or drag and drop it onto the upload area.</span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">2. Convert:</span>
            <span className='pl-[5px] text-gray-900'>Our powerful conversion engine will process your PDF, and the URL will be generated shortly.</span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">3. Share:</span>
            <span className='pl-[5px] text-gray-900'>Copy the live URL and share it with your colleagues, clients, or friends - it's that easy!</span>
          </div>
          <div className="mt-[20px] text-center">
            <span className='font-bold text-[18px] text-gray-600'>Start converting your PDFs to URLs now and experience the convenience of online document sharing.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
