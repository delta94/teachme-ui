import React from "react";
import {
  CourseState,
  TaskIcon,
} from "../components/layout/screens/courses/courses.interface";
import { iconComponent } from "../constants/icons";

export enum Icon {
  Check = "check",
  Success = "success",
  Error = "error",
  Close = "close",
  Question = "question",
  ArrowLeft = "arrow-left",
  ArrowRight = "arrow-right",
  BackArrow = "back-arrow",
  Dropdown = "dropdown",
  NoResults = "no-results",
}

export type IconType = Icon | CourseState | TaskIcon;

export default function useIconManager(): {
  getIconByType: (type: IconType) => JSX.Element;
} {
  const getIconComponent = (type: keyof typeof iconComponent) => {
    const Component = iconComponent[type];

    return Component && <Component />;
  };

  const getIcon = (type: IconType): JSX.Element => {
    const TagName = getIconComponent(type as keyof typeof iconComponent);

    return type && <span className={`icon ${type}`}>{TagName}</span>;
  };

  return {
    getIconByType: (type: IconType) => {
      return getIcon(type);
    },
  };
}
