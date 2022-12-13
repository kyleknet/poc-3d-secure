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
      <div className="container">{children}</div>
      <style jsx>{`
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
