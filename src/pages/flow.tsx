"use-client";

import Link from "next/link";
import Layout from "../components/Layout";

export default function Flow() {
  return (
    <>
      <Layout>
        <h1>DATA FLOW</h1>
        <p>Please note, false delays have been added in to slow app responses</p>
        <div className="box-container">
          <div className="box">User enters data into form and clicks submit</div>
          <div className="box">VISA elements are added onto the data byt the app and then sent to the 3DS provider</div>
          <div className="box">3DS provider replies back with an iframe and self-contained logic</div>
          <div className="box">
            3DS provider performs their own logic and once complete they will run a callback to our frontend
          </div>
          <div className="box">Our frontend will receive a token and some data about the transaction</div>
          <div className="box">Our frontend then passes the transaction with the 3DS token to our backend</div>
          <div className="box">
            Our backend will then process the transaction with the 3DS token and reply back to the frontend
          </div>
          <div className="box">
            Based on the response from our backend, we will either route the user to the success or failure page
          </div>
        </div>
        <Link href="/">Back to home</Link>
      </Layout>
      <style jsx>{`
        .box-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 60px;
          justify-content: center;
          align-items: center;
          padding: 0 100px;
          margin-bottom: 100px;
        }
        .box {
          border-radius: 12px;
          border: 2px solid white;
          width: 200px;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px;
          text-align: center;
          position: relative;
        }
        .box::after {
          content: "➞";
          position: absolute;
          right: -55px;
          font-size: 50px;
        }
        .box:last-of-type::after {
          content: "";
        }
      `}</style>
    </>
  );
}
