import React from "react";

export default function useIconManager(type: string) {
  const getIconByType = (type: string) => {
    if (type === "arrow-left") {
      return <span className="icon arrow-left"></span>;
    } else if (type === "check") {
      return <span className="icon check"></span>;
    }
    return <></>;
  };

  return getIconByType(type);
}
