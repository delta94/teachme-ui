import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import {
  ICourseData,
  CourseState,
} from "../../../../interfaces/courses/courses.interface";
import { IListItem, IItemComponentProps } from "../ListItem";
import { ProgressBar } from "../../../progress-bar/ProgressBar";
import Button, { ButtonType } from "../../../buttons/Button";

import useListItemManager from "../../../../hooks/useListItemManager";
import MessageContainer from "../../../message-container/MessageContainer";
import { COURSE_DISABLED_MSG } from "../../../../consts/app";
import { TeachMeContext } from "../../../../App";
import useIconManager, {
  Icon,
  IconType,
} from "../../../../hooks/useIconManager";
export interface ITMListItemProps extends IItemComponentProps<ICourseData> {
  hideProgressBar?: boolean;
  extraLabel?: string;
  overrideLabel?: string;
  hideButtonIcon?: boolean;
}

export default function TMListItem({
  item,
  hideProgressBar,
  extraLabel = "",
  overrideLabel,
  hideButtonIcon,
  onSelect,
}: ITMListItemProps) {
  const {
    id,
    title,
    subTitle,
    clickable,
    data = { status: 0, state: CourseState.NotStarted },
    description = "",
    disabledMsg = COURSE_DISABLED_MSG,
  } = item;
  const { walkmeSDK } = useContext(TeachMeContext);
  const { handleListItemClick } = useListItemManager(walkmeSDK);
  const { getIconByType } = useIconManager();

  const { status, state, media } = data;
  const { thumbnail } = media;
  const isCompleted =
    state === CourseState.Completed || state === CourseState.Tested;
  const isDisabled = state === CourseState.Disabled;

  const buttonLabel =
    status > 0 ? (isCompleted ? "Completed" : "Resume") : "Start";

  const buttonIcon = !isCompleted && Icon.ArrowRight;

  const isTested = state === CourseState.Tested;

  const handleClick = () => {
    if (onSelect) {
      onSelect();
    } else {
      handleListItemClick(item);
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
              {!hideButtonIcon && getIconByType(buttonIcon)}
            </span>
          </Button>
          <span className={`test-label ${(isTested && "tested") || ""}`}>
            {isTested ? "Tested" : "Not tested"}
            {isTested && getIconByType(CourseState.Tested)}
          </span>
        </footer>
      </article>
      {!hideProgressBar && <ProgressBar percentCompletion={status} />}
    </div>
  );
}
