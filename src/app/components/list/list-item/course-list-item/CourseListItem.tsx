import React from "react";
import {
  ICourse,
  CourseState,
} from "../../../../layout/screens/courses-screen/CoursesScreen";
import { IListItem } from "../ListItem";
import { ProgressBar } from "../../../progress-bar/ProgressBar";
import Button, { ButtonType } from "../../../buttons/Button";

import "../../../../../styles/components/course-list-item.less";

export default function CourseListItem<T extends ICourse>({
  item,
  onSelect,
}: {
  item: IListItem<T>;
  onSelect?: () => void;
}) {
  const {
    id,
    title,
    subTitle,
    thumbnailSrc,
    extraData = { status: 0, state: CourseState.NotStarted },
  } = item;
  const { status, state } = extraData;
  const isCompleted =
    state === CourseState.Completed || state === CourseState.Tested;

  const buttonLabel =
    status > 0 ? (isCompleted ? "Completed" : "Resume") : "Start";

  const testStatus = state === CourseState.Tested ? "Tested" : "Not Tested";

  return (
    <div
      className="item course-info"
      // onClick={() => {
      //   onSelect();
      // }}
    >
      {thumbnailSrc && (
        <picture className="thumb">
          <img src={thumbnailSrc} alt={title} title={title} />
        </picture>
      )}
      <article>
        <header>
          <span className="title">{title}</span>
          {subTitle && <span className="sub-title">{subTitle}</span>}
        </header>
        <footer className="status-area">
          <Button
            className="action"
            tmButtonType={
              isCompleted ? ButtonType.Completed : ButtonType.Default
            }
            id={id}
            buttonClicked={(id: string) => {
              onSelect();
            }}
          >
            <span className="label">{buttonLabel}</span>
          </Button>
          <span className="test-status">{testStatus}</span>
        </footer>
      </article>
      <ProgressBar percentCompletion={status} />
    </div>
  );
}
