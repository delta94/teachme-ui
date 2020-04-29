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
    extraData = { status: 0, state: CourseState.NotStarted },
  } = item;
  const { status, state } = extraData;

  let buttonLabel = status > 0 ? "Resume" : "Start";
  const testStatus = state === CourseState.Tested ? "Tested" : "Not Tested";
  if (state === CourseState.Completed || state === CourseState.Tested) {
    buttonLabel = "Completed";
  }

  return (
    <div
      className="item course-info"
      onClick={() => {
        onSelect();
      }}
    >
      {thumbnailSrc && (
        <picture className="thumb">
          <img src={thumbnailSrc} alt={title} title={title} />
        </picture>
      )}
      <article>
        <span className="title">{title}</span>
        <div className="status-area">
          <button className="action-status" type="button">
            {buttonLabel}
          </button>
          <span className="test-status">{testStatus}</span>
        </div>
      </article>
      <ProgressBar percentCompletion={status} />
    </div>
  );
}
