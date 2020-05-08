import React from "react";
import {
  ICourseItem,
  CourseItemType,
} from "../../../layout/screens/courses-screen/courses.interface";
import {
  getCourseItemState,
  parseTask,
} from "../../../layout/screens/courses-screen/coursesUtils";
import ListItem from "../list-item/ListItem";
import LessonListItem from "../list-item/lesson-list-item/LessonListItem";

export default function CourseItemsList({ items }: { items: ICourseItem[] }) {
  return (
    <ul className="course-items">
      {items.map((item: ICourseItem, index: number) => {
        return item.type === CourseItemType.Lesson ? (
          <LessonListItem
            key={`lesson-list-item-${item.id}`}
            isFirst={index === 0}
            item={item}
          />
        ) : (
          <ListItem
            key={`list-item-${item.id}`}
            item={parseTask(item)}
            className={"task-item"}
            state={getCourseItemState(item)}
            iconType={item.type}
          />
        );
      })}
    </ul>
  );
}
