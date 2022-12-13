"use-client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/Loader";
import Layout from "../components/Layout";

export default function Verification() {
  const router = useRouter();
  const params = router.query;

  async function postToBackend(input: any) {
    console.log(input);
    const res = await fetch(`/api/dtBackend/transactionCapture`, {
      headers: {
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
      method: "POST",
      body: JSON.stringify(input),
    });
    const data = await res.json();
    console.log(data);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (router.query.status === "FAILURE") {
        postToBackend(params);
        setTimeout(() => {
          router.replace("/fail", undefined, { shallow: true });
        }, 2000);
      }
      if (router.query.status === "SUCCESS") {
        postToBackend(params);
        setTimeout(() => {
          router.replace("/success", undefined, { shallow: true });
        }, 2000);
      }
    }
  }, [router, params]);

  return (
    <Layout>
      <Loader />
    </Layout>
  );
}
