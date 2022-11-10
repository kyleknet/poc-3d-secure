"use-client";

import { useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [threeDiFrame, setThreeDiFrame] = useState<any>(null);

  const apiCall = async (where: string) => {
    const res = await fetch(`/api/${where}`, {
      method: "POST",
      headers: {
        "Cache-control": "no-cache",
      },
      body: JSON.stringify({ where }),
    });
    const data = await res.json();
    console.log(data.iframe);
    setThreeDiFrame(data.iframe);
  };

  return (
    <>
      <Layout>
        {threeDiFrame ? (
          <iframe
            id="spa-iframe"
            src={threeDiFrame}
            className="iframe-container"
            sandbox="allow-scripts allow-same-origin allow-top-navigation allow-forms"
          />
        ) : (
          <button className="btn" onClick={() => apiCall("3dsecure")} type="button">
            Click here for 3dsecure
          </button>
        )}
      </Layout>
      <style jsx>{`
        .btn {
          border: none;
          background: none;
        }
        .iframe-container {
          width: 80vh;
          height: 40vh;
          margin: auto;
          border: 2px solid darkturquoise;
          border-radius: 8px;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
        }
        .btn {
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: bold;
          color: white;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
          border: none;
          background-color: darkslateblue;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
