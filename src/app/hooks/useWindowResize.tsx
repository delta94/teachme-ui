import React, { useEffect, useState } from "react";

export default function useWindowResize() {
  const [[windowWidth, windowHeight], setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log("windowWidth ", windowWidth);
  // console.log("windowHeight ", windowHeight);

  return {
    windowWidth,
    windowHeight,
  };
}
