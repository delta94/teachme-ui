import React from "react";
import { ICourseItem } from "../../../../interfaces/courses/courses.interface";
import Dropdown from "../../../dropdown/Dropdown";
import { parseTasksToItemList } from "../../../../layout/screens/courses-screen/coursesUtils";
import localization from "../../../../consts/localization";

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
        title={item.title}
        items={parseTasksToItemList(item.tasks)}
        isOpen={isOpen}
        handler={{
          state: item.state,
        }}
        disabledMsg={localization.lessonDisabledMsg}
      />
    </li>
  );
}
