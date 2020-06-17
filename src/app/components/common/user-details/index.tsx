import React, { useContext } from "react";

// interfaces
import { IUserDetailsProps } from "./userDetails.interface";

// context
import { TeachMeContext } from "../../../providers/TeachmeProvider";

// constants
import localization from "../../../constants/localization";

// components
import { ProgressBar } from "../progress-bar";

export default function UserDetails({
  greeting,
  progressBar,
}: IUserDetailsProps) {
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
