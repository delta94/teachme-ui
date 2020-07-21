import React from "react";

// interfaces
import { CourseState } from "../../layout/screens/courses/courses.interface";
import { IMessageContainerProps } from "./messageContainer.interface";

export default function MessageContainer({
  message,
  type = CourseState.Disabled,
  className = "disabled-message",
}: IMessageContainerProps) {
  return (
    <div className={`container-message ${className} ${type}`}>
      <span className="text">{message}</span>
    </div>
  );
}
