// pages/about.js

import Head from "next/head";
import React from "react";

const PrivacyPage = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className=" mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Welcome to PDF Crop!</p>
        <p className="mb-4">
          At PDF Crop, we are committed to protecting your privacy.
          Our Privacy Policy outlines how we collect, use, and protect your
          personal information.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="font-bold mb-2">Data Collection:</li>
          <span className="mb-2">
            We collect data that you provide us when using our services, such as
            email addresses and uploaded files. We may also collect usage
            information and cookies to enhance your experience.
          </span>
          <li className="font-bold mb-2 mt-4">Data Usage:</li>
          <span className="mb-2">
            We use your data to provide, maintain, and improve our services.
            Your data will not be shared with third parties without your
            consent.
          </span>
          <li className="font-bold mb-2 mt-4">Security:</li>
          <span className="mb-2">
            We implement security measures to protect your data from
            unauthorized access, disclosure, alteration, and destruction.
          </span>
          <li className="font-bold mb-2 mt-4">Cookie Usage:</li>
          <span className="mb-2">
            We use cookies to enhance your website experience. You can manage
            your cookie preferences in your browser settings.
          </span>
        </ul>
        <p className="mb-4">
          For a comprehensive understanding of our data practices and your
          rights, please review our complete Privacy Policy.
        </p>
        <p className="mb-4">
          Please adapt and expand these descriptions as needed to align with
          your website's specific features and services. Additionally, it's
          advisable to seek legal counsel to ensure your "Terms of Use" and
          "Privacy Policy" comply with relevant laws and regulations.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
