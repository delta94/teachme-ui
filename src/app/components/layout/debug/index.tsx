import React, { useContext } from "react";
import { TeachMeContext } from "../../../providers/TeachmeProvider";

export default function Debug() {
  const tmContext = useContext(TeachMeContext);
  const { debugError } = tmContext.appState.tmState;
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
