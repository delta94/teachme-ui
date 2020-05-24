import React from "react";

export default function Iframe({
  isResponsive,
  src,
}: {
  src: string;
  isResponsive?: boolean;
}) {
  const responsiveClass = isResponsive ? "responsive" : "";
  return (
    <section className={`iframe-container ${responsiveClass}`}>
      <iframe src={src} frameBorder="0"></iframe>
    </section>
  );
}
