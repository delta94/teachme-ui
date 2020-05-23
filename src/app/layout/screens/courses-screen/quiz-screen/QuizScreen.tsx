import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TeachMeContext } from "../../../../App";

export default function QuizScreen() {
  const { sidebar } = useContext(TeachMeContext);
  const { isOpen, setIsOpen } = sidebar;

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
        src="http://localhost:9001/?platform=mock&teachme=mock&courseId=1#"
        frameBorder="0"
      ></iframe>
    </section>
  );
}
