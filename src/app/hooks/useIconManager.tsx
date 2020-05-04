import React from "react";
import { CourseState } from "../layout/screens/courses-screen/courses.interface";

export enum Icon {
  ArrowLeft = "arrow-left",
  Check = "check",
  Article = "article",
  Video = "video",
  WalkThru = "walk-thru",
}

export type IconType = Icon | CourseState;

export default function useIconManager(type: IconType) {
  const getIconByType = (type: IconType) => {
    if (type === Icon.ArrowLeft) {
      return <span className="icon arrow-left"></span>;
    } else if (type === Icon.Check || type === CourseState.Completed) {
      return <span className="icon check"></span>;
    } else if (type === Icon.WalkThru) {
      return <span className="icon walk-thru"></span>;
    } else if (type === Icon.Article) {
      return <span className="icon article"></span>;
    } else if (type === Icon.Video) {
      return <span className="icon video"></span>;
    }
  };

  return getIconByType(type);
}
