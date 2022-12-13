import Head from "next/head";
import { type ReactNode } from "react";

type Props = {
  children?: ReactNode;
  bgColor?: string;
} & typeof defaultProps;

const defaultProps = {
  bgColor: "slategrey",
};

function Layout({ children, bgColor }: Props) {
  return (
    <>
      <Head>
        <title>3D Secure POC</title>
        <meta name="description" content="3D Secure POC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>Please open your browser&apos;s devtools and inspect the network tab to view the the flow of data</header>
      <div className="container">{children}</div>
      <style jsx>{`
        header {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
        }
        .container {
          background-color: ${bgColor};
          min-height: 100vh;
          min-width: 100vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

Layout.defaultProps = defaultProps;

export default Layout;
