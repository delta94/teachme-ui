import React, { useContext, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

// context & utils
import { TeachMeContext } from "../../../../App";
import { getCourseById } from "../../../../utils/coursesUtils";

// components
import Iframe from "../../../../components/iframe/Iframe";

// styles
import "../../../../../styles/screens/courses-screen/quiz-screen.less";

type TParams = { courseId: string };

export default function QuizScreen({ match }: RouteComponentProps<TParams>) {
  const tmContext = useContext(TeachMeContext);
  const { tmCourses } = tmContext.tmState;
  const { sidebar } = useContext(TeachMeContext);
  const { isOpen, setIsOpen } = sidebar;
  const { courseId } = match.params;
  const quizBaseUrl = "https://cdn.walkme.com/apps/wm-forms/index.html";
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
