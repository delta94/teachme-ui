import React from "react";

import {
  ICourseData,
  CourseState,
} from "../../../../layout/screens/courses-screen/courses.interface";
import { IListItem } from "../ListItem";
import { ProgressBar } from "../../../progress-bar/ProgressBar";
import Button, { ButtonType } from "../../../buttons/Button";

import "../../../../../styles/components/list/list-item/course-list-item.less";
import { Link } from "react-router-dom";

export default function CourseListItem<T>({
  item,
}: {
  item: IListItem<ICourseData>;
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
          >
            <Link to={`/course/${id}`}>
              <span className="btn-label">{buttonLabel}</span>
            </Link>
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
