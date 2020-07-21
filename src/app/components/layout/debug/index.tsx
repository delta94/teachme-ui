import React, { useContext } from "react";

// context
import { TeachMeContext } from "../../../providers/TeachmeProvider";

/**
 * Debug - component should show according to app config:
 * teachme-ui/src/app/constants/config.ts
 */
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
