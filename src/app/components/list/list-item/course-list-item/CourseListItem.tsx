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
  item: IListItem<ICourseData>;
  onSelect?: () => void;
}) {
  const {
    id,
    title,
    subTitle,
    data = { status: 0, state: CourseState.NotStarted },
  } = item;
  const { status, state, media } = data;
  const { thumbnail } = media;
  const isCompleted =
    state === CourseState.Completed || state === CourseState.Tested;
  const buttonLabel =
    status > 0 ? (isCompleted ? "Completed" : "Resume") : "Start";
  const isTested = state === CourseState.Tested;

  return (
    <div className="item course-info">
      {thumbnail && (
        <picture className="thumb">
          <img
            className="ratio_1_1"
            src={thumbnail.ratio_1_1}
            alt={title}
            title={title}
          />
          <img
            className="ratio_2_1"
            src={thumbnail.ratio_2_1}
            alt={title}
            title={title}
          />
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
            <span className="btn-label">{buttonLabel}</span>
          </Button>
          <span className={`test-label ${isTested ? "tested" : ""}`}>
            {isTested ? "Tested" : "Not Tested"}
          </span>
        </footer>
      </article>
      <ProgressBar percentCompletion={status} />
    </div>
  );
}
