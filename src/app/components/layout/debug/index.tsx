import React, { useContext } from "react";
import { TeachMeContext } from "../../../App";

export default function Debug() {
  const tmContext = useContext(TeachMeContext);
  const { debugError } = tmContext.tmState;
  if (Boolean(debugError)) {
    return null;
  }
  return (
    <div
      className="debug"
      style={{
        position: "absolute",
      }}
    >
      <span>{debugError}</span>
    </div>
  );
}
