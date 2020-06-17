import React from "react";

// components
import Screens from "../screens";
import Header from "../header";

// styles
import "./index.less";

export default function Main({ className = "" }: { className?: string }) {
  return (
    <div className={`main ${className}`}>
      <Header />
      <Screens />
    </div>
  );
}
