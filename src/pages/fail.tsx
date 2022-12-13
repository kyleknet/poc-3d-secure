"use-client";

import Link from "next/link";
import Layout from "../components/Layout";

export default function FailureVerification() {
  return (
    <Layout>
      <h1>FAILURE</h1>
      <Link href="/">Back to start</Link>
    </Layout>
  );
}
