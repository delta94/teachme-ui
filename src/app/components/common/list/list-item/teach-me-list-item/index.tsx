import React, { useContext } from "react";

// context & localization
import { TeachMeContext } from "../../../../../providers/TeachmeProvider";
import localization from "../../../../../constants/localization";

// interfaces
import {
  ICourseData,
  CourseState,
} from "../../../../layout/screens/courses/interface";
import { IItemComponentProps } from "..";

// components
import { ProgressBar } from "../../../progress-bar";
import Button, { ButtonType } from "../../../buttons";
import MessageContainer from "../../../message-container";

// hooks
import useListItemManager from "../../../../../hooks/useListItemManager";
import useIconManager, { Icon } from "../../../../../hooks/useIconManager";

import "./index.less";

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
    disabledMsg,
  } = item;
  const { walkmeSDK } = useContext(TeachMeContext);
  const { handleListItemClick } = useListItemManager(walkmeSDK);
  const { getIconByType } = useIconManager();

  const { status, state, media } = data;
  const { thumbnail } = media;
  const isCompleted =
    state === CourseState.Completed || state === CourseState.Tested;
  const isDisabled = state === CourseState.Disabled;
  const {
    tmListItem: {
      buttonLabel: { start, completed, resume },
      testLabel: { tested, notTested },
    },
  } = localization;
  const buttonLabelState =
    status > 0 ? (isCompleted ? completed : resume) : start;

  const buttonIcon = !isCompleted && Icon.ArrowRight;

  const isTested = state === CourseState.Tested;
  const testLabelState = isTested ? tested : notTested;

  const handleClick = () => {
    if (onSelect) {
      onSelect();
    } else {
      handleListItemClick(item);
    }
  };

  return (
    <div
      className={`item tm-item-info ${isDisabled ? "disabled" : ""}  ${
        clickable ? "clickable" : ""
      }`}
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
            src={require(`../../../../../../images/${thumbnail.ratio_1_1}`)}
            alt={title}
            title={title}
          />
          <img
            className="ratio_2_1"
            src={require(`../../../../../../images/${thumbnail.ratio_2_1}`)}
            alt={title}
            title={title}
          />
        </picture>
      )}
      <article>
        <header>
          <h3 className="title" title={title}>
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
            id={id.toString()}
            buttonClicked={handleClick}
          >
            <span className="btn-label">
              {overrideLabel || `${buttonLabelState} ${extraLabel}`}
              {!hideButtonIcon && getIconByType(buttonIcon)}
            </span>
          </Button>
          <span className={`test-label ${(isTested && "tested") || ""}`}>
            {testLabelState}
            {isTested && getIconByType(CourseState.Tested)}
          </span>
        </footer>
      </article>
      {!hideProgressBar && <ProgressBar percentCompletion={status} />}
    </div>
  );
}
