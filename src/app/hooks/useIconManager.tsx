import React from "react";
import { CourseState, TaskIcon } from "../interfaces/courses/courses.interface";
import { ReactComponent as CheckIcon } from "../../images/icons/checkmark.svg";
import { ReactComponent as CloseIcon } from "../../images/icons/close.svg";
import { ReactComponent as ArrowIcon } from "../../images/icons/arrow-down.svg";
import { ReactComponent as ArticleIcon } from "../../images/icons/Article.svg";
import { ReactComponent as VideoIcon } from "../../images/icons/Video.svg";
import { ReactComponent as WalkthruIcon } from "../../images/icons/Walkthru.svg";
import { ReactComponent as DoubleCheckmarksIcon } from "../../images/icons/double-checkmarks.svg";
import { ReactComponent as BackArrowIcon } from "../../images/icons/back-arrow.svg";

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
}

export type IconType = Icon | CourseState | TaskIcon;

const iconComponent = {
  check: CheckIcon,
  completed: CheckIcon,
  success: CheckIcon,
  error: CloseIcon,
  close: CloseIcon,
  article: ArticleIcon,
  video: VideoIcon,
  "smart-walkthru": WalkthruIcon,
  "arrow-left": ArrowIcon,
  "arrow-down": ArrowIcon,
  "arrow-right": ArrowIcon,
  "arrow-top": ArrowIcon,
  dropdown: ArrowIcon,
  tested: DoubleCheckmarksIcon,
  "back-arrow": BackArrowIcon,
};

export default function useIconManager(): {
  getIconByType: (type: IconType) => JSX.Element;
} {
  const getIconComponent = (type: keyof typeof iconComponent) => {
    const Component = iconComponent[type];
    console.log("getIconComponent ", Component);
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
