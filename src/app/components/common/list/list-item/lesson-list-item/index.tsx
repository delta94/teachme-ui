import React from "react";

// consts
import localization from "../../../../../constants/localization";

// interfaces
import { ICourseItem } from "../../../../layout/screens/courses/interface";

// utils
import { parseTasksToItemList } from "../../../../layout/screens/courses/utils";

// components
import Dropdown from "../../../dropdown";

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
