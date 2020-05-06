import React, { useContext } from "react";
import { TeachMeContext } from "../../App";
import { wmPlatformType } from "../../consts/app";

export default function Content() {
  const tmContext = useContext(TeachMeContext);
  return (
    <div
      className="content"
      style={{
        right:
          tmContext.tmState.platformType === wmPlatformType.Windows ? 10 : "",
      }}
    >
      <div id="jq-screens" className="contentPadding">
        {/* <!-- Screens --> */}
      </div>
    </div>
  );
}
