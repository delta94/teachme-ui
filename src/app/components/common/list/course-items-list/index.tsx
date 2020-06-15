import React from "react";

// interfaces
import {
  ICourseItem,
  CourseItemType,
} from "../../../../interfaces/courses/courses.interface";

// utils
import { getCourseItemState, parseTask } from "../../../../utils/coursesUtils";

// components
import ListItem from "../list-item";
import LessonListItem from "../list-item/lesson-list-item";

export default function CourseItemsList({
  items,
  selectedTaskId,
}: {
  items: ICourseItem[];
  selectedTaskId?: number;
}) {
  return (
    <ul className="course-items">
      {items.map((item: ICourseItem, index: number) => {
        const isSelectedTaskId = selectedTaskId === item.id;
        const taskHighlightingClass = isSelectedTaskId ? "highlight" : "";

        return item.type === CourseItemType.Lesson ? (
          <LessonListItem
            key={`lesson-list-item-${item.id}`}
            isOpen={isSelectedTaskId}
            item={item}
            className={taskHighlightingClass}
          />
        ) : (
          <ListItem
            key={`list-item-task-${item.id}`}
            item={parseTask(item)}
            className={`task-item ${taskHighlightingClass}`}
            state={getCourseItemState(item)}
            type={item.type}
          />
        );
      })}
    </ul>
  );
}
