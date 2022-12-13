"use-client";

import { useState, useRef, ChangeEvent } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [threeDiFrame, setThreeDiFrame] = useState<any>(null);

  const cardholderNameRef = useRef<HTMLInputElement>(null);
  const creditCardNumberRef = useRef<HTMLInputElement>(null);
  const expiryDateRef = useRef<HTMLInputElement>(null);
  const cvvRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`/api/3dsProvider/3dSecureVerification`, {
      method: "POST",
      headers: {
        "Cache-control": "no-cache",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        cardholderName: cardholderNameRef.current?.value,
        creditCardNumber: creditCardNumberRef.current?.value,
        expiryDate: expiryDateRef.current?.value,
        cvv: cvvRef.current?.value,
        amount: Number(amountRef.current?.value).toFixed(2),
      }),
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
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="cardholder-name">Cardholder Name</label>
              <input ref={cardholderNameRef} type="text" name="cardholder-name" id="cardholder-name" />
            </div>
            <div className="form-group">
              <label htmlFor="credit-card-number">Credit Card Number</label>
              <input ref={creditCardNumberRef} type="text" name="credit-card-number" id="credit-card-number" />
            </div>
            <div className="form-group">
              <label htmlFor="expiry-date">Expiry Date</label>
              <input ref={expiryDateRef} type="text" name="expiry-date" id="expiry-date" />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input ref={cvvRef} type="text" name="cvv" id="cvv" />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input ref={amountRef} type="text" name="amount" id="amount" />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        )}
      </Layout>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }
        .iframe-container {
          width: 80vh;
          height: 40vh;
          margin: auto;
          border: 2px solid darkturquoise;
          border-radius: 8px;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .form-group input {
          background-color: white;
          border: none;
          height: 30px;
          color: #333;
          padding: 0px 8px;
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
