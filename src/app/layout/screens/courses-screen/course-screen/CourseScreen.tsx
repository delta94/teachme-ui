import React from "react";
import { ICourse } from "../courses.interface";
import Button, { ButtonType } from "../../../../components/buttons/Button";

export default function CourseScreen({
  course,
  onClickedBack,
}: {
  course: ICourse;
  onClickedBack: () => void;
}) {
  return (
    <div className="course-screen">
      <Button
        id="back_to_courses"
        tmButtonType={ButtonType.None}
        buttonClicked={onClickedBack}
      >
        <span>Go Back</span>
      </Button>
      <div className="course-data">{JSON.stringify(course)}</div>
    </div>
  );
}
