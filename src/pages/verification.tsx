"use-client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/Loader";
import Layout from "../components/Layout";

export default function Verification() {
  const router = useRouter();
  const params = router.query;

  const postToBackend = useCallback(
    async (input: any) => {
      try {
        const res = await fetch(`/api/dtBackend/transactionCapture`, {
          headers: {
            "Content-type": "application/json",
            "Cache-control": "no-cache",
          },
          method: "POST",
          body: JSON.stringify(input),
        });
        const data = await res.json();
        if (data.success === true) {
          router.replace("/success", undefined, { shallow: true });
        } else {
          router.replace("/fail", undefined, { shallow: true });
        }
      } catch (error) {
        console.error(error);
      }
    },
    [router]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      var timer = setTimeout(() => {
        postToBackend(params);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [params, postToBackend]);

  return (
    <Layout>
      <Loader />
    </Layout>
  );
}
