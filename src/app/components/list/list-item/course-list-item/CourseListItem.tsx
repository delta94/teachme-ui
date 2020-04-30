import React from "react";

import {
  ICourseData,
  CourseState,
} from "../../../../layout/screens/courses-screen/courses.interface";
import { IListItem } from "../ListItem";
import { ProgressBar } from "../../../progress-bar/ProgressBar";
import Button, { ButtonType } from "../../../buttons/Button";

import "../../../../../styles/components/list/list-item/course-list-item.less";

export default function CourseListItem<T extends ICourseData>({
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
    data = { status: 0, state: CourseState.NotStarted },
  } = item;
  const { status, state } = data;
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
          <h3 className="title">{title}</h3>
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
