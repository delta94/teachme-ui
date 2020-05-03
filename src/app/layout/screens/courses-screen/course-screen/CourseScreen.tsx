import React, { useEffect, useState } from "react";
import { getCourseById } from "../coursesUtils";

export default function CourseScreen(props: any) {
  const [course, setCourse] = useState(null);
  useEffect(() => {
    const selectedCourse = getCourseById(props.match.params.courseId);
    setCourse(selectedCourse);
  }, []);
  return <div className="course-screen">{JSON.stringify(course)}</div>;
}
