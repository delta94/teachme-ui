import React, { useContext } from "react";

// context
import { TeachMeContext } from "../../../providers/TeachmeProvider";

// constants
import localization from "../../../constants/localization";

// components
import { ProgressBar } from "../progress-bar";

export default function UserDetails({
  greeting,
  progressBar,
}: {
  greeting?: boolean;
  progressBar?: boolean;
}) {
  const tmContext = useContext(TeachMeContext);
  const {
    tmUser: {
      courses: { percentCompletion },
    },
  } = tmContext.appState.tmState;
  const {
    header: { userDetails },
  } = localization;

  return (
    <>
      {greeting && <h2 className="greeting">{userDetails.greeting}</h2>}
      {progressBar && (
        <ProgressBar percentCompletion={percentCompletion} showTitle />
      )}
    </>
  );
}
