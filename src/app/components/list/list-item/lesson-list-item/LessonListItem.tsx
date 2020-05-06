import React from "react";
import { ICourseItem } from "../../../../layout/screens/courses-screen/courses.interface";
import Dropdown from "../../../dropdown/Dropdown";
import {
  parseTasksToItemList,
  getCourseItemState,
} from "../../../../layout/screens/courses-screen/coursesUtils";

export default function LessonListItem({
  item,
  isFirst,
}: {
  item: ICourseItem;
  isFirst: boolean;
}) {
  return (
    <li className="lesson-item" key={`dropdown-${item.id}`}>
      <Dropdown
        className="course-lessons"
        id={`lesson ${item.id}`}
        title={`Lesson ${item.lessonNumber} - ${item.title}`}
        items={parseTasksToItemList(item.tasks)}
        isOpen={isFirst}
        handler={{
          state: getCourseItemState(item),
        }}
      />
    </li>
  );
}
