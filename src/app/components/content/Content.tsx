import React, { useContext } from "react";
import { WalkMeContext } from "../../App";
import { wmPlatformType } from "../../consts/platform";

// if (wmState.platformType === wmPlatformType.Windows) {
//   $(".content").css({ right: 10 });
// }

export default function Content() {
  const wmContext = useContext(WalkMeContext);
  return (
    <div
      className="content"
      style={{
        right:
          wmContext.wmState.platformType === wmPlatformType.Windows ? 10 : "",
      }}
    >
      <div id="jq-screens" className="contentPadding">
        {/* <!-- Screens --> */}
      </div>
    </div>
  );
}
