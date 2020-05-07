import React, { useContext } from "react";
import { TeachMeContext } from "../../../App";
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

  return (
    <>
      {greeting && <h2 className="greeting">Welcome Back, {user.firstName}</h2>}
      {progressBar && (
        <ProgressBar percentCompletion={percentCompletion} showTitle />
      )}
    </>
  );
}
