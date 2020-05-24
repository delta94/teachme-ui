import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { TeachMeContext } from "../../../../App";

type TParams = { courseId: string };

export default function QuizScreen({ match }: RouteComponentProps<TParams>) {
  const { sidebar } = useContext(TeachMeContext);
  const { isOpen, setIsOpen } = sidebar;
  const { courseId } = match.params;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 0);
    }
  }, []);

  return (
    <section className="screen quiz-screen">
      <iframe
        src={`http://localhost:9001/?platform=mock&teachme=mock&courseId=${courseId}`}
        frameBorder="0"
      ></iframe>
    </section>
  );
}
