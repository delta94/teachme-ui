import React, { useEffect } from "react";

export default function Iframe({
  isResponsive,
  src,
  data,
}: {
  src: string;
  isResponsive?: boolean;
  data?: any;
}) {
  const iframe = React.useRef<HTMLIFrameElement>(null);
  const responsiveClass = isResponsive ? "responsive" : "";
  const iframeLoaded = () => {
    if (data) {
      console.log("iframeLoaded data ", data);
      const iframeWin = iframe.current.contentWindow;
      iframeWin.postMessage({ data, type: "loadData" }, src);
    }
  };

  return (
    <section className={`iframe-container ${responsiveClass}`}>
      <iframe
        ref={iframe}
        src={src}
        frameBorder="0"
        onLoad={iframeLoaded}
      ></iframe>
    </section>
  );
}
