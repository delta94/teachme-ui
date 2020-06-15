import React from "react";

// interfaces
import { CourseState } from "../../../interfaces/courses/courses.interface";

export default function MessageContainer({
  message,
  type = CourseState.Disabled,
  className = "disabled-message",
}: {
  message: string;
  type: CourseState;
  className: string;
}) {
  return (
    <div className={`container-message ${className} ${type}`}>
      <span className="text">{message}</span>
    </div>
  );
}
