import FIleUpload from "@/components/FIleUpload";
import GlobalContext from "@/contexts/GlobalContext";
import Head from "next/head";
import React, { useContext, useMemo, useState } from "react";

export default function CropPDF() {
  const { selectTab, setSelectTab, setCropURL } = useContext(GlobalContext);
  const [size, setSize] = useState({});

  const [lableSize, setLableSize] = useState("76.5x125");

  const HandleSize = (event) => {
    setCropURL("");
    setLableSize(event.target.value);
  };
  useMemo(() => {
    const [width, height] = lableSize?.split("x");

    const widthsize = (parseFloat(width) * 72) / 25.5;
    const heightsize = (parseInt(height) * 72) / 25.5;
    setSize({ widthsize, heightsize });
  }, [lableSize]);

  return (
    <div>
      <Head>
        <title>{selectTab?.name}</title>
      </Head>
      <div className="py-5 min-h-[90vh]">
        <div className="px-3 text-center max-w-5xl mx-auto">
          <h1 className="mt-[30px] sm:mt-[56px] relative z-[3] text-[28px] sm:text-[32px] font-bold leading-[44px] md:text-[48px] lg:leading-[60px] text-gray-600 lg:mt-[76px] ">
            Welcome to Label Crop - Simplify Your PDF Cropping!
          </h1>
          <h3 className="mt-[20px] font-bold text-gray-500">
            Are you tired of struggling with complex PDF cropping tools? Look no
            further! Label Crop is here to streamline your cropping experience.
            Our user-friendly website makes it a breeze to crop PDFs with
            precision and ease. Here's how it works:
          </h3>

          <h3 className="mb-4 font-bold text-start text-[17px] mt-10 text-gray-900">
            Select label size*
          </h3>
          <div className="flex items-center gap-8">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-license"
                type="radio"
                value="76.5x125"
                name="list-radio"
                checked={lableSize === "76.5x125"}
                className="w-4 h-4 text-blue-800 bg-gray-100"
                onChange={HandleSize}
              />
              <label
                htmlFor="horizontal-list-radio-license"
                className="py-3 ml-4 text-[14px] font-bold text-gray-600"
              >
                75 × 125mm (Letter)
              </label>
            </div>
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-id"
                type="radio"
                value="77x125"
                checked={lableSize === "77x125"}
                name="list-radio"
                className="w-4 h-4 text-blue-800 bg-gray-100"
                onChange={HandleSize}
              />
              <label
                htmlFor="horizontal-list-radio-id"
                className="py-3 ml-4 text-[14px] font-bold text-gray-600"
              >
                77 × 125mm (Legal)
              </label>
            </div>
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-id-3"
                type="radio"
                value="79x125"
                name="list-radio"
                checked={lableSize === "79x125"}
                className="w-4 h-4 text-blue-800 bg-gray-100"
                onChange={HandleSize}
              />
              <label
                htmlFor="horizontal-list-radio-id-3"
                className="py-3 ml-4 text-[14px] font-bold text-gray-600"
              >
                79 × 125mm (Tabloid)
              </label>
            </div>
          </div>
          <h3 className="mb-4 font-bold text-start text-[17px] mt-8 text-gray-900">
            Features*
          </h3>
          <div className="sm:flex items-center gap-8">
            <div className="flex items-center pl-3">
              <input
                id="jkasdbfkjroeiwrnl"
                type="checkbox"
                value=""
                name="list-radio"
                checked
                className="w-4 h-4 text-blue-800 bg-gray-100"
              />
              <label
                htmlFor="jkasdbfkjroeiwrnl"
                className="py-3 ml-4 text-[14px] font-bold text-gray-600"
              >
                Group Label By SKU
              </label>
            </div>
            <div className="flex items-center pl-3">
              <input
                id="ahjsfvdsfhjshaljfl"
                type="checkbox"
                value=""
                name="list-radio"
                checked
                className="w-4 h-4 text-blue-800 bg-gray-100"
              />
              <label
                htmlFor="ahjsfvdsfhjshaljfl"
                className="py-3 ml-4 text-[14px] font-bold text-gray-600"
              >
                Sorted By Courier
              </label>
            </div>
            <div className="flex items-center pl-3">
              <input
                id=" hsdjjsjdbfjsd"
                type="checkbox"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-800 bg-gray-100"
              />
              <label
                htmlFor=" hsdjjsjdbfjsd"
                className="py-3 ml-4 text-[14px] font-bold text-gray-600"
              >
                Create Manifest
              </label>
            </div>
            <div className="flex items-center pl-3">
              <input
                id=" dfgdftreth"
                type="checkbox"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-800 bg-gray-100"
                checked
              />
              <label
                htmlFor=" dfgdftreth"
                className="py-3 ml-4 text-[14px] font-bold text-gray-600"
              >
                Add Order Count Page
              </label>
            </div>
          </div>
          <FIleUpload size={size} />
        </div>
        <div className="px-3 max-w-5xl mx-auto relative">
          <p className="text-[22px] font-bold text-gray-800">
            How to Use Label Crop:
          </p>
          <div className="mt-[30px]">
            <span className="text-[18px] font-bold text-gray-700">
              1. Upload Your Files:
            </span>
            <span className="pl-[5px] text-gray-900">
              Start by uploading the PDF files you want to crop. Our system will
              quickly process your files, making them ready for cropping.
            </span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">
              2. Select the Area You Want to Crop:
            </span>
            <span className="pl-[5px] text-gray-900">
              Use our intuitive cropping tool to select the specific area of the
              PDF that you want to keep. You can easily adjust the crop box to
              ensure your labels or content are perfectly framed.
            </span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">
              3. Wait for Upload to Complete:
            </span>
            <span className="pl-[5px] text-gray-900">
              Our efficient system will handle the file upload process
              seamlessly. Sit back and relax while we prepare your PDF for
              cropping.
            </span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">
              4. Press Proceed Button:
            </span>
            <span className="pl-[5px] text-gray-900">
              Once you're satisfied with your crop selection, hit the "Proceed"
              button. Label Crop will start processing your PDF according to
              your specifications.
            </span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">
              5. Wait for Process to Complete:
            </span>
            <span className="pl-[5px] text-gray-900">
              Our powerful processing engine will swiftly crop your PDF,
              ensuring accuracy and quality. You'll be notified when the process
              is done.
            </span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[18px] font-bold text-gray-700">
              5. Get Your Cropped PDF:
            </span>
            <span className="pl-[5px] text-gray-900">
              Voilà! Your cropped PDF is ready for download. Enjoy your neatly
              trimmed labels or content, hassle-free.
            </span>
          </div>
          <div className="mt-[25px] mb-[20px] text-center">
            <span className="font-bold text-[18px] text-gray-600">
              Label Crop is designed to save you time and effort when cropping
              PDFs. Say goodbye to complex software and hello to a simple,
              efficient solution for all your cropping needs. Try Label Crop
              today and experience the difference!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
