import React, { useContext, useEffect, useState } from "react";
import { RouteComponentProps, useLocation } from "react-router-dom";

import { TeachMeContext } from "../../../../App";
import Iframe from "../../../../components/iframe/Iframe";
import { getCourseById } from "../../../../utils/coursesUtils";

type TParams = { courseId: string };

export default function QuizScreen({ match }: RouteComponentProps<TParams>) {
  const tmContext = useContext(TeachMeContext);
  const { tmCourses } = tmContext.tmState;
  const { sidebar } = useContext(TeachMeContext);
  const { isOpen, setIsOpen } = sidebar;
  const { courseId } = match.params;
  const quizBaseUrl = "http://localhost:9001/"; // "https://cdn.walkme.com/apps/wm-forms/index.html";
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 0);
    }

    const currentQuiz = getCourseById({
      tmCourses,
      id: courseId,
    }).quiz;

    if (currentQuiz) {
      setQuiz(currentQuiz);
    }
  }, []);

  return (
    <section className="screen quiz-screen">
      {quiz && <Iframe src={quizBaseUrl} isResponsive data={quiz} />}
    </section>
  );
}
