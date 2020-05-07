import React, { ReactElement } from "react";
import { CourseState } from "../../../layout/screens/courses-screen/courses.interface";
import useIconManager, { IconType } from "../../../hooks/useIconManager";
import { useHistory } from "react-router-dom";
import useLink from "../../../hooks/useLink";
import MessageContainer from "../../message-container/MessageContainer";

export interface IItemComponentProps<T> {
  onSelect: () => void;
  item: IListItem<T>;
}

export type IListItemState = CourseState;

export interface IListItem<T> {
  id: string;
  title: string;
  subTitle?: string;
  description?: string;
  link?: string;
  clickable?: boolean;
  externalLink?: boolean;
  primaryBtn?: {
    label: string;
  };
  state?: IListItemState;
  iconType?: IconType;
  data?: T;
  disabledMsg?: string;
}

export default function ListItem<T>({
  item,
  className = "",
  onSelect,
  state,
  iconType,
  itemComponent,
}: {
  item: IListItem<T>;
  className?: string;
  state?: IListItemState;
  iconType?: IconType;
  onSelect?: (selected: IListItem<T>) => void;
  itemComponent?: (props?: IItemComponentProps<T>) => ReactElement;
}) {
  const { handleLinkClick } = useLink();
  const {
    title,
    subTitle,
    primaryBtn,
    disabledMsg = "This item is not completed and unavailable",
  } = item;

  const icon = useIconManager(iconType);
  const stateIcon = useIconManager(state);
  const stateClass = "state" || "";
  const isDisabled = state === CourseState.Disabled;

  const itemContent = (
    <>
      <header>
        <span className="title">
          <span className="text">{title}</span>
          {icon}
        </span>
        {subTitle && <span className="sub-title">{subTitle}</span>}
      </header>
      {stateIcon}
    </>
  );

  const listItemClick = () => {
    if (!isDisabled) {
      if (onSelect) {
        onSelect(item);
      } else if (item.link) {
        handleLinkClick(item.link);
      }
    }
    // TODO: add SDK logic
    // walkme.content.playById(node.type, nodeId);
    // walkme.platform.closeMe();
  };

  if (itemComponent) {
    return (
      <li className={`list-item ${className} ${stateClass}`}>
        {itemComponent({
          onSelect: listItemClick,
          item,
        })}
      </li>
    );
  }

  return (
    <li className={`list-item ${className}`}>
      <div className={`item ${stateClass}`}>
        {isDisabled && (
          <MessageContainer
            message={disabledMsg}
            className="disabled-message"
            type={state}
          />
        )}
        <article className="item-info">
          <div
            className="item-handler"
            onClick={() => {
              if (!item.primaryBtn) {
                listItemClick();
              }
            }}
          >
            {itemContent}
          </div>
          {primaryBtn && (
            <footer>
              <button
                type="button"
                className="primary-button"
                onClick={listItemClick}
              >
                {primaryBtn.label}
              </button>
            </footer>
          )}
        </article>
      </div>
    </li>
  );
}
