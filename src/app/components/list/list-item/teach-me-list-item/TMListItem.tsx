import React from "react";
import { useHistory } from "react-router-dom";

import {
  ICourseData,
  CourseState,
} from "../../../../interfaces/courses/courses.interface";
import { IListItem } from "../ListItem";
import { ProgressBar } from "../../../progress-bar/ProgressBar";
import Button, { ButtonType } from "../../../buttons/Button";

import useLink from "../../../../hooks/useLink";
import MessageContainer from "../../../message-container/MessageContainer";
import { COURSE_DISABLED_MSG } from "../../../../consts/app";

export default function TMListItem({
  item,
  hideProgressBar,
  extraLabel = "",
  overrideLabel,
  onSelect,
}: {
  item: IListItem<ICourseData>;
  hideProgressBar?: boolean;
  extraLabel?: string;
  overrideLabel?: string;
  onSelect?: () => void;
}) {
  const {
    id,
    title,
    link,
    subTitle,
    clickable,
    data = { status: 0, state: CourseState.NotStarted },
    description = "",
    disabledMsg = COURSE_DISABLED_MSG,
  } = item;
  const { handleLinkClick } = useLink();
  const { status, state, media } = data;
  const { thumbnail } = media;
  const isCompleted =
    state === CourseState.Completed || state === CourseState.Tested;
  const isDisabled = state === CourseState.Disabled;

  const buttonLabel =
    status > 0 ? (isCompleted ? "Completed" : "Resume") : "Start";

  const isTested = state === CourseState.Tested;

  const handleClick = () => {
    if (onSelect) {
      onSelect();
    } else if (link) {
      handleLinkClick(link);
    }
  };

  return (
    <div
      className={`item tm-item-info ${isDisabled ? "disabled" : ""}`}
      onClick={() => {
        if (clickable) {
          handleClick();
        }
      }}
    >
      {isDisabled && (
        <MessageContainer
          message={disabledMsg}
          className="disabled-message"
          type={state}
        />
      )}
      {thumbnail && (
        <picture className="thumb">
          <img
            className="ratio_1_1"
            src={require(`../../../../../images/${thumbnail.ratio_1_1}`)}
            alt={title}
            title={title}
          />
          <img
            className="ratio_2_1"
            src={require(`../../../../../images/${thumbnail.ratio_2_1}`)}
            alt={title}
            title={title}
          />
        </picture>
      )}
      <article>
        <header>
          <h3 className="title">
            <span className="text">{title}</span>
          </h3>
          {subTitle && <span className="sub-title">{subTitle}</span>}
          {description && <p className="description">{description}</p>}
        </header>
        <footer className="status-area">
          <Button
            className="action"
            tmButtonType={
              isCompleted ? ButtonType.Completed : ButtonType.Default
            }
            id={id}
            buttonClicked={handleClick}
          >
            <span className="btn-label">
              {overrideLabel || `${buttonLabel} ${extraLabel}`}
            </span>
          </Button>
          <span className={`test-label ${isTested ? "tested" : ""}`}>
            {isTested ? "Tested" : "Not tested"}
          </span>
        </footer>
      </article>
      {!hideProgressBar && <ProgressBar percentCompletion={status} />}
    </div>
  );
}
