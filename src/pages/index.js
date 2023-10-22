import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Home from "../components/Home";

export default function Index() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>PDFCrop</title>
      </Head>
      <Home />
    </div>
  );
}
