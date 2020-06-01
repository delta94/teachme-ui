import React from "react";

// consts
import localization from "../../../../consts/localization";

// interfaces
import { ICourseItem } from "../../../../interfaces/courses/courses.interface";

// utils
import { parseTasksToItemList } from "../../../../utils/coursesUtils";

// components
import Dropdown from "../../../dropdown/Dropdown";

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
