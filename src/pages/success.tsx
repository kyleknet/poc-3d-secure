import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

export default function Success() {
  const [pageState, setPageState] = useState<any>({ success: null, html: null });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sesh = sessionStorage.getItem("pay_auth");
      if (sesh === "d53e41e6-b5f0-41e7-86b6-facbd332b4fa") {
        setPageState({ success: true, html: <h1>SUCCESS!</h1> });
      } else {
        setPageState({ success: false, html: <h1>HEY! SKELM!</h1> });
      }

      setTimeout(() => {
        sessionStorage.clear();
      }, 1000);
    }
  }, []);

  return <Layout bgColor={!pageState.success ? "crimson" : "green"}>{pageState ? pageState.html : <Loader />}</Layout>;
}
