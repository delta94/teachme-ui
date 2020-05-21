import React from "react";
const Form = React.lazy(() => import("wmForms/Form"));

export default function QuizScreen() {
  return (
    <section className="screen quiz-screen">
      <React.Suspense fallback="Loading Button">
        <Form />
      </React.Suspense>
    </section>
  );
}
