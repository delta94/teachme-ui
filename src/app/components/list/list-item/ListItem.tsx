import React, { ReactElement } from "react";
import { CourseState } from "../../../layout/screens/courses-screen/courses.interface";
import useIconManager, { IconType } from "../../../hooks/useIconManager";

export interface IItemComponentProps<T> {
  onSelect: () => void;
  item: IListItem<T>;
}

export type IListItemState = CourseState;

export interface IListItem<T> {
  id: string;
  title: string;
  subTitle?: string;
  link?: string;
  primaryBtn?: {
    label: string;
  };
  state?: IListItemState;
  iconType?: IconType;
  data?: T;
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
  const { title, subTitle, primaryBtn } = item;
  const icon = useIconManager(iconType);
  const stateIcon = useIconManager(state);
  const stateClass = state || "";

  const itemContent = (
    <>
      <header>
        <span className="title">
          {title}
          {icon}
        </span>
        {subTitle && <span className="sub-title">{subTitle}</span>}
      </header>
      {stateIcon}
    </>
  );

  const listItemClick = () => {
    onSelect(item);
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
    <li className={`list-item ${className} ${stateClass}`}>
      <div className="item">
        <article className="item-info">
          {item.link ? (
            <a className="item-handler" target="_blank" href={item.link}>
              {itemContent}
            </a>
          ) : (
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
          )}
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
