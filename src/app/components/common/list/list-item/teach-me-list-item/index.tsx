import React, { useContext } from "react";
import cc from "classcat";

// context & localization
import { TeachMeContext } from "../../../../../providers/TeachmeProvider";

// interfaces
import { CourseState } from "../../../../layout/screens/courses/courses.interface";

// hooks
import useListItemManager from "../../../../../hooks/useListItemManager";

// components
import { ProgressBar } from "../../../progress-bar";
import MessageContainer from "../../../message-container";
import TMListItemThumbnail from "./TMListItemThumbnail";
import TMListItemHeader from "./TMListItemHeader";
import TMListItemFooter from "./TMListItemFooter";
import { ITMListItemProps } from "../../list.interface";

// styles
import "./index.less";

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
