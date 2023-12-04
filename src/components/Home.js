import { useRouter } from "next/router";
import React from "react";
const posts = [
  {
    id: 1,
    img: "/assets/icons-1.png",
    title: "How our system works?",
    des: "Our system process your files securily through our dedicated high capacity servers.",
  },
  {
    id: 2,
    img: "/assets/icons-2.png",
    title: "Does each user get individual account?",
    des: "Yes, all user have to create individual account to use this tools.",
  },
  {
    id: 3,
    img: "/assets/icons-3.png",
    title: "Do you offer refund?",
    des: "We have refund policy, you can request refund if our service is not working properly.",
  },
  {
    id: 4,
    img: "/assets/icons-4.png",
    title: "Can I use accounts in Office and Home?",
    des: "You can use accounts anywhere, but don't share accounts with anyone, we have an automated reporting system that can ban your account if we detect sharing violations.",
  },
  {
    id: 5,
    img: "/assets/icons-5.png",
    title: "Can I share account?",
    des: "We do not allow sharing of accounts, if our system detects that you are sharing accounts we will immediately ban your account without notice/refund.",
  },
  {
    id: 6,
    img: "/assets/icons-6.png",
    title: "Did my file stored?",
    des: "No, we did not stored or share your any uploaded file to pdfcroppers, each file uploaded to pdfcroppers get deleted in 30 minute of upload.",
  },
];
const works = [
  {
    id: 1,
    img: "/assets/Split PDF.png",
    title: "Split PDF",
    des: "Split your large PDF files, into separate, smaller files.",
  },
  {
    id: 2,
    img: "/assets/Image To PDF.png",
    title: "Image To PDF",
    des: "Convert JPG Images to PDF.",
  },
  {
    id: 3,
    img: "/assets/Merge PDF.png",
    title: "Merge PDF",
    des: "Combine PDFs in the order you want with the easiest PDF merger.",
  },
  {
    id: 4,
    img: "/assets/Rotate PDF.png",
    title: "Rotate PDF",
    des: "Rotate your PDFs the way you need them, You can even rotate multiple PDFs at once!",
  },
  {
    id: 5,
    img: "/assets/Delete PDF Pages.png",
    title: "Delete PDF Pages",
    des: "Remove pages from a PDF document.",
  },
  {
    id: 6,
    img: "/assets/Protect PDF.png",
    title: "Protect PDF",
    des: "Add a password and encrypt your PDF file.",
  },
];

function Home() {
  const router = useRouter();
  return (
    <div>
      <section className="w-full flex justify-center py-4 px-4 md:h-[80vh]">
        <div className="w-full max-w-[1080px] block md:flex justify-between items-center">
          <div className="w-[100%] md:w-[50%]">
            <p className="text-[32px] md:text-[44px] text-[#00308F] font-bold leading-[45px] md:leading-[55px] text-center md:text-left">
              Best E-Commerce Label Crop and PDF Tool Provider
            </p>
            <p className="text-[18px] md:text-[22px] text-center md:text-left pt-2 pb-4">
              Get access to premium pdf tools
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                className="border-2 border-[#002D62] hover:bg-[#002D62] hover:text-[#fff] px-2 md:px-4 py-2 md:py-3 rounded-xl"
                onClick={() => router.push("/tools")}
              >
                Explore All PDF Tools
              </button>
            </div>
          </div>
          <div className="w-[100%] md:w-[50%]">
            <img
              className="w-full h-full min-h-[50vh]"
              src="/assets/hero_img.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center py-4 px-4 bg-[#7CB9E8] bg-opacity-20">
        <div className="w-full max-w-[1080px] py-8">
          <p className="text-center text-[#00308F] text-[24px] md:text-[30px] font-bold pb-5">
            What exactly is great about PDF Tool that can provide you?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div
                className="bg-[#fff] rounded-xl flex flex-col items-center p-5"
                key={posts.id}
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

      <section className="w-full flex justify-center py-4 px-4">
        <div className="w-full max-w-[1080px] py-8">
          <p className="text-center text-[#00308F] text-[24px] md:text-[30px] font-bold pb-5">
            What Else You Can Do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {works.map((work) => (
              <div className="flex flex-col items-center p-5" key={works.id}>
                <img className="w-[40px]" src={work.img} alt="" />
                <p className="text-[20px] text-[#002D62] font-semibold pt-5 pb-2 text-center">
                  {work.title}
                </p>
                <p className="text-[14px] md:text-[16px] text-center leading-[20px]">
                  {work.des}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
