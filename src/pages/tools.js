import { useRouter } from "next/router";
import React from "react";
const posts = [
  {
    id: 1,
    img: "/assets/tools/merge.png",
    title: "Merge PDF",
    des: "Combine PDFs in the order you want with the easiest PDF merger available.",
    url: "/merge-pdf",
  },
  {
    id: 2,
    img: "/assets/tools/crop.png",
    title: "Crop PDF",
    des: "Reduce file size while optimizing for maximal PDF quality.",
    url: "/crop/flipkart",
  },
  {
    id: 3,
    img: "/assets/tools/word.svg",
    title: "PDF to Word",
    des: "Easily convert your PDF files into easy to edit DOC and DOCX documents. The converted WORD document is almost 100% accurate.",
    url: "#",
  },
  {
    id: 4,
    img: "/assets/tools/powerPoint.svg",
    title: "PDF to PowerPoint",
    des: "Turn your PDF files into easy to edit PPT and PPTX slideshows.",
    url: "#",
  },
  {
    id: 5,
    img: "/assets/tools/excel.svg",
    title: "PDF to Excel",
    des: "Pull data straight from PDFs into Excel spreadsheets in a few short seconds.",
    url: "#",
  },
  {
    id: 6,
    img: "/assets/tools/pdf.svg",
    title: "Word to PDF",
    des: "Make DOC and DOCX files easy to read by converting them to PDF.",
    url: "#",
  },
  {
    id: 7,
    img: "/assets/tools/pPdf.svg",
    title: "PowerPoint to PDF",
    des: "Make PPT and PPTX slideshows easy to view by converting them to PDF.",
    url: "#",
  },
  {
    id: 8,
    img: "/assets/tools/ePdf.svg",
    title: "Excel to PDF",
    des: "Make EXCEL spreadsheets easy to read by converting them to PDF.",
    url: "#",
  },
  {
    id: 9,
    img: "/assets/tools/jpg.svg",
    title: "PDF to JPG",
    des: "Convert each PDF page into a JPG or extract all images contained in a PDF.",
    url: "#",
  },
  {
    id: 10,
    img: "/assets/tools/jPdf.svg",
    title: "JPG to PDF",
    des: "Convert JPG images to PDF in seconds. Easily adjust orientation and margins.",
    url: "#",
  },
];
export default function Tools() {
  const route = useRouter();
  return (
    <div>
      <section className="w-full flex justify-center py-4 px-4 bg-[#7CB9E8] bg-opacity-20">
        <div className="w-full max-w-[1080px] py-8">
          <p className="text-center text-[#00308F] text-[24px] md:text-[30px] font-bold pb-5">
            Our Comprehensive Toolkit
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div
                className="bg-[#fff] rounded-xl flex flex-col items-center p-5"
                key={post.id}
                onClick={() => route.push(post?.url)}
              >
                <img className="w-[50px]" src={post.img} alt="" />
                <p className="text-[20px] text-[#002D62] font-semibold pt-5 pb-2 text-center">
                  {post.title}
                </p>
                <p className="text-[14px] md:text-[16px] text-center leading-[20px]">
                  {post.des}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
