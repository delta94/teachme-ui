import React from "react";
import { CourseState, TaskIcon } from "../interfaces/courses/courses.interface";

export enum Icon {
  Check = "check",
  Success = "success",
  Error = "error",
  Close = "close",
  Question = "question",
  ArrowLeft = "arrow-left",
  ArrowRight = "arrow-right",
  BackArrow = "back-arrow",
  Dropdown = "Dropdown",
}

export type IconType = Icon | CourseState | TaskIcon;

export default function useIconManager(): {
  getIconByType: (type: IconType) => JSX.Element;
} {
  const getIcon = (type: IconType): JSX.Element => {
    if (type === CourseState.Tested) {
      return <span className={`icon ${Icon.Success}`}></span>;
    } else if (type === CourseState.Completed) {
      return <span className={`icon ${Icon.Check}`}></span>;
    }
    return type && <span className={`icon ${type}`}></span>;
  };

  return {
    getIconByType: (type: IconType) => {
      return getIcon(type);
    },
  };
}
