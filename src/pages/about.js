// pages/about.js

import Head from "next/head";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <div className=" mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p className="mb-4">Welcome to our file conversion service!</p>
        <p className="mb-4">
          Our Next.js project allows you to convert various file types into live
          URLs. With our service, you can convert files such as PDFs, XLSX
          spreadsheets, DOC and DOCX documents, PPT and PPTX presentations, as
          well as images into URLs that can be easily shared and accessed
          online.
        </p>
        <p className="mb-4">
          Here are some key features of our file conversion service:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Support for multiple file formats, including PDF, XLSX, DOC, DOCX,
            PPT, PPTX, and various image formats.
          </li>
          <li>
            Quick and seamless conversion process - simply upload your file and
            receive a live URL within seconds.
          </li>
          <li>
            Generated URLs are accessible on any device with internet access,
            making it convenient to share files across different platforms.
          </li>
          <li>
            Secure and private file handling - we prioritize the confidentiality
            of your files and ensure they are deleted after conversion.
          </li>
          <li>
            User-friendly interface with intuitive file upload and conversion
            functionality.
          </li>
          <li>
            Reliable and scalable architecture built on Next.js, leveraging the
            power of React for efficient rendering and performance.
          </li>
        </ul>
        <p className="mb-4">
          Our file conversion service is designed to simplify the process of
          sharing and accessing files online. Whether you need to share
          important documents with colleagues, present slideshows, or showcase
          images, our project provides a hassle-free solution.
        </p>
        <p className="mb-4">
          To use our service, simply navigate to the homepage and select the
          file you want to convert. After the file is uploaded and processed,
          you will receive a live URL that you can share with others. The
          converted file can then be accessed directly through the URL,
          eliminating the need for recipients to download and open files
          locally.
        </p>
        <p>
          Thank you for choosing our file conversion service. We hope it
          simplifies your file sharing needs and enhances your productivity. If
          you have any questions or feedback, please don't hesitate to reach out
          to our support team.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
