import React from "react";
import Screens from "../screens/Screens";
import Header from "../header/Header";

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
