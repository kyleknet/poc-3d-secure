export default function Loader() {
  return (
    <>
      <div className="loader-container">
        <div className="loader"></div>
      </div>
      <style jsx>{`
        .loader-container {
          width: 100px;
          height: 100px;
          position: relative;
        }
        .loader {
          border-radius: 100%;
          border-width: 3px;
          border-color: white;
          border-style: solid;
          animation: grow 1s linear infinite;
          position: absolute;
          top: 50%;
          left: 50%;
          translate: -50% -50%;
        }
        @keyframes grow {
          0% {
            width: 20px;
            height: 20px;
          }
          50% {
            width: 100px;
            height: 100px;
          }
          100% {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </>
  );
}
