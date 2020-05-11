import React from "react";
import { ICourseItem } from "../../../../interfaces/courses/courses.interface";
import Dropdown from "../../../dropdown/Dropdown";
import {
  parseTasksToItemList,
  getCourseItemState,
  parseTask,
} from "../../../../layout/screens/courses-screen/coursesUtils";
import { LESSON_DISABLED_MSG } from "../../../../consts/app";

export default function LessonListItem({
  item,
  isOpen,
  className = "",
}: {
  item: ICourseItem;
  isOpen: boolean;
  className?: string;
}) {
  return (
    <li className={`lesson-item ${className}`} key={`dropdown-${item.id}`}>
      <Dropdown
        className="course-lessons"
        id={`lesson ${item.id}`}
        title={`Lesson ${item.lessonNumber} - ${item.title}`}
        items={parseTasksToItemList(item.tasks)}
        isOpen={isOpen}
        handler={{
          state: item.state,
        }}
        disabledMsg={LESSON_DISABLED_MSG}
      />
    </li>
  );
}
