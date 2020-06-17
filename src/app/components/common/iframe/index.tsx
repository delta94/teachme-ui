import React from "react";
import cc from "classcat";

// interfaces
import { IIframeProps } from "./iframe.interface";

// styles
import "./index.less";

export default function Iframe({ isResponsive, src }: IIframeProps) {
  return (
    <section className={cc(["iframe-container", { responsive: isResponsive }])}>
      <iframe src={src} frameBorder="0"></iframe>
    </section>
  );
}
