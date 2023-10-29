// pages/about.js

import Head from "next/head";
import React from "react";

const TermsPage = () => {
  return (
    <div>
      <Head>
        <title>Terms of Use</title>
      </Head>
      <div className=" mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
        <p className="mb-4">Welcome to PDF Crop!</p>
        <p className="mb-4">
          These terms outline the rules and regulations that govern your use of
          our website and services. By accessing and using our website, you
          agree to abide by these terms. Please read them carefully.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="font-bold mb-2">User Responsibilities:</li>
          <span className="mb-2">
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account. You agree to use our services in compliance with all
            applicable laws and regulations.
          </span>
          <li className="font-bold mb-2 mt-4">Service Usage:</li>
          <span className="mb-2">
            PDF Crop provides services for cropping e-commerce labels and
            converting various file formats. You agree not to misuse or abuse
            our services, including uploading malicious or inappropriate
            content.
          </span>
          <li className="font-bold mb-2 mt-4">Privacy:</li>
          <span className="mb-2">
            Your use of our services is also governed by our Privacy Policy,
            which outlines how we collect, use, and protect your data.
          </span>
          <li className="font-bold mb-2 mt-4">Intellectual Property:</li>
          <span className="mb-2">
            All content, logos, and trademarks on our website are the property
            of PDF Crop. You may not use, reproduce, or distribute our content
            without our permission.
          </span>
          <li className="font-bold mb-2 mt-4">Disclaimers:</li>
          <span className="mb-2">
            We provide our services "as is," and we do not guarantee that they
            will be error-free or uninterrupted. You use our services at your
            own risk.
          </span>
        </ul>
        <p className="mb-4">
          Please review the complete Terms of Use for a comprehensive
          understanding of your rights and responsibilities when using PDF Crop.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
