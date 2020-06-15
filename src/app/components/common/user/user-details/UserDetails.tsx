import React, { useContext } from "react";

// context & consts
import { TeachMeContext } from "../../../../App";
import localization from "../../../../consts/localization";

// components
import { ProgressBar } from "../../progress-bar/ProgressBar";

export default function UserDetails({
  greeting,
  progressBar,
}: {
  greeting?: boolean;
  progressBar?: boolean;
}) {
  const tmContext = useContext(TeachMeContext);
  const { tmUser } = tmContext.tmState;
  const {
    user,
    courses: { percentCompletion },
  } = tmUser;
  const {
    header: { userDetails },
  } = localization;

  return (
    <>
      {greeting && (
        <h2 className="greeting">
          {userDetails.greeting}, {user.firstName}
        </h2>
      )}
      {progressBar && (
        <ProgressBar percentCompletion={percentCompletion} showTitle />
      )}
    </>
  );
}
