import { CourseState } from "../../layout/screens/courses/courses.interface";

export interface IMessageContainerProps {
  message: string;
  type: CourseState;
  className: string;
}
