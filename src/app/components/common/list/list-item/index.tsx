import React, { ReactElement, useContext } from "react";

// context
import { TeachMeContext } from "../../../../App";

// interfaces
import {
  CourseState,
  CourseItemType,
} from "../../../layout/screens/courses/interface";

// hooks
import useIconManager, { IconType } from "../../../../hooks/useIconManager";
import useListItemManager from "../../../../hooks/useListItemManager";

// components
import MessageContainer from "../../message-container";

export interface IItemComponentProps<T> {
  onSelect?: () => void;
  item: IListItem<T>;
}

export type IListItemState = CourseState;

export interface IListItem<T> {
  id: number;
  courseId?: number;
  title: string;
  subTitle?: string;
  description?: string;
  link?: string;
  clickable?: boolean;
  useWalkMeSdk?: boolean;
  state?: IListItemState;
  type?: CourseItemType;
  data?: T;
  disabledMsg?: string;
  tasks?: IListItem<{}>[];
  primaryBtn?: {
    label: string;
  };
}

export interface IListItemProps<T> {
  item: IListItem<T>;
  className?: string;
  state?: IListItemState;
  type?: CourseItemType;
  onSelect?: (selected: IListItem<T>) => void;
  itemComponent?: (props?: IItemComponentProps<T>) => ReactElement;
}

export default function ListItem<T>({
  item,
  className = "",
  onSelect,
  state,
  type,
  itemComponent,
}: IListItemProps<T>) {
  const { walkmeSDK } = useContext(TeachMeContext);
  const { handleListItemClick } = useListItemManager(walkmeSDK);
  const { title, subTitle, primaryBtn, disabledMsg = "" } = item;

  const { getIconByType } = useIconManager();
  const stateClass = state || "";
  const isDisabled = state === CourseState.Disabled;

  const itemContent = (
    <>
      <header>
        <span className="title" title={title}>
          <span className="text">{title}</span>
          {getIconByType(type as IconType)}
        </span>
        {subTitle && <span className="sub-title">{subTitle}</span>}
      </header>
      {getIconByType(state as IconType)}
    </>
  );

  const listItemClick = () => {
    if (onSelect) {
      onSelect(item);
    } else {
      handleListItemClick(item);
    }
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
                onClick={() => {
                  listItemClick();
                }}
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
