import React from "react";
import {
  CourseState,
  TaskIcon,
  CourseItemType,
} from "../layout/screens/courses-screen/courses.interface";

export enum Icon {
  ArrowLeft = "arrow-left",
  Check = "check",
}

export type IconType = Icon | CourseState | TaskIcon;

export default function useIconManager(type: IconType) {
  const getIconByType = (type: IconType) => {
    if (type === Icon.ArrowLeft) {
      return <span className="icon arrow-left"></span>;
    } else if (type === Icon.Check || type === CourseState.Completed) {
      return <span className="icon check"></span>;
    } else if (type === CourseItemType.WalkThru) {
      return <span className="icon walk-thru"></span>;
    } else if (type === CourseItemType.Article) {
      return <span className="icon article"></span>;
    } else if (type === CourseItemType.Video) {
      return <span className="icon video"></span>;
    }
  };

  return getIconByType(type);
}
