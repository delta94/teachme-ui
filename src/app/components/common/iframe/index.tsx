import React from "react";
import cc from "classcat";

// styles
import "./index.less";

export default function Iframe({
  isResponsive,
  src,
}: {
  src: string;
  isResponsive?: boolean;
}) {
  return (
    <section className={cc(["iframe-container", { responsive: isResponsive }])}>
      <iframe src={src} frameBorder="0"></iframe>
    </section>
  );
}
