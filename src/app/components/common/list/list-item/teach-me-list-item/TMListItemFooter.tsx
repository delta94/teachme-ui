import React from "react";
import cc from "classcat";

import Button, { ButtonType } from "../../../buttons";
import {
  CourseState,
  ICourseData,
} from "../../../../layout/screens/courses/interface";
import localization from "../../../../../constants/localization";
import { IListItem } from "..";
import useIconManager, {
  Icon,
  IconType,
} from "../../../../../hooks/useIconManager";
import { ITMListItemProps } from ".";

type ITMListItemFooterProps = Omit<ITMListItemProps, "hideProgressBar">;

export default function TMListItemFooter({
  itemButtonClicked,
  tmListItemFooter,
}: {
  itemButtonClicked?: () => void;
  tmListItemFooter: ITMListItemFooterProps;
}) {
  const {
    item,
    extraLabel = "",
    overrideLabel,
    iconType,
    hideButtonIcon,
  } = tmListItemFooter;
  const {
    id,
    data: { status, state },
  } = item;
  const {
    tmListItem: {
      buttonLabel: { start, completed, resume },
      testLabel: { tested, notTested },
    },
  } = localization;
  const { getIconByType } = useIconManager();

  const isCompleted =
    state === CourseState.Completed || state === CourseState.Tested;
  const buttonLabelState =
    status > 0 ? (isCompleted ? completed : resume) : start;
  const buttonIcon = iconType || (!isCompleted && Icon.ArrowRight);
  const isTested = state === CourseState.Tested;
  const testLabelState = isTested ? tested : notTested;

  return (
    <footer className="status-area">
      <Button
        className="action"
        tmButtonType={isCompleted ? ButtonType.Completed : ButtonType.Default}
        id={id.toString()}
        buttonClicked={itemButtonClicked}
      >
        <span className="btn-label">
          {overrideLabel || `${buttonLabelState} ${extraLabel}`}
          {!hideButtonIcon && getIconByType(buttonIcon)}
        </span>
      </Button>
      <span className={cc(["test-label", { tested: isTested }])}>
        {testLabelState}
        {isTested && getIconByType(CourseState.Tested)}
      </span>
    </footer>
  );
}
