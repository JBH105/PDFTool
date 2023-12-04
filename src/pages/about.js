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
        <p className="mb-4">Welcome to PDF Tool!</p>
        <p className="mb-4">
          At PDF Tool, we are dedicated to simplifying and enhancing
          your digital document and image management experience. We take pride
          in offering a wide range of services that empower you to effortlessly
          crop e-commerce labels and convert files between various formats such
          as PDF, Word, PowerPoint, Excel, and JPG. Our mission is to provide
          you with the tools and resources you need to streamline your work,
          increase productivity, and make your digital tasks easier.
        </p>
        <p className="mb-4">
          Our team is comprised of passionate individuals who share a common
          goal: to provide you with top-notch solutions for all your document
          and image conversion needs. We are committed to delivering excellence
          in every aspect of our services, from user-friendly interfaces to
          efficient processing and secure data handling. Your satisfaction and
          trust are our highest priorities.
        </p>
        {/* <ul className="list-disc list-inside mb-4">
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
        </ul> */}
        <p className="mb-4">
          Explore PDF Tool and experience the convenience and
          efficiency of our tools. Whether you're a business professional,
          student, or someone simply looking to simplify their digital life,
          we're here to support you every step of the way.
        </p>
        <p className="mb-4">
          Thank you for choosing PDF Tool. We look forward to being
          your trusted partner in all your digital conversion needs.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
