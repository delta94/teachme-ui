import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

// context & utils
import { TeachMeContext } from "../../../../../providers/TeachmeProvider";

// components
import Iframe from "../../../../common/iframe";

// styles
import "./index.less";

type TParams = { courseId: string };

export default function QuizScreen({ match }: RouteComponentProps<TParams>) {
  const { sidebar } = useContext(TeachMeContext);
  const { sidebarIsOpen, setSidebarIsOpen } = sidebar;
  const { courseId } = match.params;
  /**
   * while develop run teachme project and use this url
   * localhost url: "http://localhost:9001/";
   */
  const quizBaseUrl = "https://cdn.walkme.com/apps/wm-forms/index.html";
  const urlParams = window.location.search;
  const quizSrc = `${quizBaseUrl}${urlParams}&courseId=${courseId}`;

  useEffect(() => {
    if (sidebarIsOpen) {
      setTimeout(() => {
        setSidebarIsOpen(false);
      }, 0);
    }
  }, []);

  return (
    <section className="screen quiz-screen">
      {<Iframe src={quizSrc} isResponsive />}
    </section>
  );
}
