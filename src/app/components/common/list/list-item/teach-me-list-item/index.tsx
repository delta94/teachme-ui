import React, { useContext } from "react";
import cc from "classcat";

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
import useIconManager, {
  Icon,
  IconType,
} from "../../../../../hooks/useIconManager";

// styles
import "./index.less";
import TMListItemThumbnail from "./TMListItemThumbnail";
import TMListItemHeader from "./TMListItemHeader";
import TMListItemFooter from "./TMListItemFooter";

export interface ITMListItemProps extends IItemComponentProps<ICourseData> {
  /**
   * hideProgressBar:  an optional props - prevent rendering the progress bar
   */
  hideProgressBar?: boolean;
  /**
   * extraLabel: an optional props to render extra label next to buttonLabelState
   */
  extraLabel?: string;
  /**
   * overrideLabel: an optional props to override the button default text
   */
  overrideLabel?: string;
  /**
   * iconType: an optional props to override the default button icon text
   */
  iconType?: IconType;
  /**
   * hideButtonIcon: an optional props to hide button icon
   */
  hideButtonIcon?: boolean;
}

export default function TMListItem(props: ITMListItemProps) {
  const { item, hideProgressBar, onSelect, ...otherProps } = props;
  const {
    title,
    subTitle,
    clickable,
    data = { status: 0, state: CourseState.NotStarted },
    description = "",
    disabledMsg,
  } = item;
  const {
    status,
    state,
    media: { thumbnail },
  } = data;

  const { walkmeSDK } = useContext(TeachMeContext);
  const { handleListItemClick } = useListItemManager(walkmeSDK);
  const isDisabled = state === CourseState.Disabled;

  const handleClick = () => {
    if (onSelect) {
      onSelect();
    } else {
      handleListItemClick(item);
    }
  };

  return (
    <div
      className={cc([
        "item tm-item-info",
        {
          disabled: isDisabled,
          clickable: clickable,
        },
      ])}
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
        <TMListItemThumbnail
          title={title}
          thumbSrcRatio_1_1={require(`../../../../../../images/${thumbnail.ratio_1_1}`)}
          thumbSrcRatio_2_1={require(`../../../../../../images/${thumbnail.ratio_2_1}`)}
        />
      )}
      <article>
        <TMListItemHeader
          title={title}
          subTitle={subTitle}
          description={description}
        />
        <TMListItemFooter
          itemButtonClicked={handleClick}
          tmListItemFooter={{ item, ...otherProps }}
        />
      </article>
      {!hideProgressBar && <ProgressBar percentCompletion={status} />}
    </div>
  );
}
