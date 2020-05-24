import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { TeachMeContext } from "../../../../App";
import Iframe from "../../../../components/iframe/Ifram";

type TParams = { courseId: string };

export default function QuizScreen({ match }: RouteComponentProps<TParams>) {
  const { sidebar } = useContext(TeachMeContext);
  const { isOpen, setIsOpen } = sidebar;
  const { courseId } = match.params;
  const quizBaseUrl = "https://cdn.walkme.com/apps/wm-forms/index.html";
  const quizPlatform = "mock"; // Change to dynamic data
  const teachmePlatform = "mock"; // Change to dynamic data

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 0);
    }
  }, []);

  return (
    <section className="screen quiz-screen">
      <Iframe
        src={`${quizBaseUrl}?platform=${quizPlatform}&teachme=${teachmePlatform}&courseId=${courseId}`}
        isResponsive
      />
    </section>
  );
}
