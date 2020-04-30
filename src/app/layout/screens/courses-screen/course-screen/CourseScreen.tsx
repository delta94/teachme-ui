import React from "react";
import { ICourse } from "../courses.interface";

export default function CourseScreen({ course }: { course: ICourse }) {
  return <div className="course-screen">{JSON.stringify(course)}</div>;
}
