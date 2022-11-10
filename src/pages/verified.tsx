import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

export default function Success() {
  const {
    query: { token, status },
  } = useRouter();

  async function verifyToken(token: string | string[] | undefined, status: string | string[] | undefined) {
    const res = await fetch(`/api/verification`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
      body: JSON.stringify({ token, status }),
    });
    const data = await res.json();

    if (data.success) {
      sessionStorage.setItem("pay_auth", "d53e41e6-b5f0-41e7-86b6-facbd332b4fa");
      window.location.replace(`/success`);
      return;
    }
    window.location.replace(`/failure`);
  }

  useEffect(() => {
    if (token && status) {
      console.log(`status: ${status}`);
      console.log(`token: ${token}`);
      console.log("We could pass this token back to confirm the status to further prevent any spoofing");

      setTimeout(() => {
        verifyToken(token, status);
      }, 3000);
    }
  }, [token, status]);

  return (
    <Layout>
      <Loader />
    </Layout>
  );
}
