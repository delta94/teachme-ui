import React from "react";
import { ICourse, CourseState } from "../../layout/main/Main";
import { IListItem } from "../list/ListItem";
import { ProgressBar } from "../progress-bar/ProgressBar";

export default function CourseListItem<T extends ICourse>({
  item,
  onSelect,
}: {
  item: IListItem<T>;
  onSelect?: () => void;
}) {
  const {
    title,
    thumbnailSrc,
    primaryBtn,
    extraData = { status: 0, state: CourseState.NotStarted },
  } = item;
  const { status, state } = extraData;

  return (
    <div className="item course-info" onClick={onSelect}>
      {thumbnailSrc && (
        <picture className="thumb">
          <img src={thumbnailSrc} alt={title} title={title} />
        </picture>
      )}
      <article>
        <span className="title">{title}</span>
      </article>
      <ProgressBar percentCompletion={status} />
    </div>
  );
}
