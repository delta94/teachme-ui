import React, { ReactElement } from "react";
import { CourseState } from "../../../layout/screens/courses-screen/courses.interface";

export interface IItemComponentProps<T> {
  onSelect: () => void;
  item: IListItem<T>;
}

export interface IListItem<T> {
  id: string;
  title: string;
  subTitle?: string;
  primaryBtn?: {
    label: string;
  };
  state?: CourseState;
  data?: T;
}

export default function ListItem<T>({
  item,
  className = "",
  onSelect,
  itemComponent,
}: {
  item: IListItem<T>;
  className?: string;
  onSelect?: (selected: IListItem<T>) => void;
  itemComponent?: (props?: IItemComponentProps<T>) => ReactElement;
}) {
  const { title, subTitle, primaryBtn } = item;

  const listItemClick = () => {
    onSelect(item);
  };

  if (itemComponent) {
    return (
      <li className={`list-item ${className}`}>
        {itemComponent({
          onSelect: listItemClick,
          item,
        })}
      </li>
    );
  }

  return (
    <li
      className={`list-item ${className}`}
      onClick={() => {
        if (!item.primaryBtn) {
          listItemClick();
        }
      }}
    >
      <div className="item">
        <article className="item-info">
          <header>
            <span className="title">{title}</span>
            {subTitle && <span className="sub-title">{subTitle}</span>}
          </header>
          <footer>
            {primaryBtn && (
              <button
                type="button"
                className="primary-button"
                onClick={listItemClick}
              >
                {primaryBtn.label}
              </button>
            )}
          </footer>
        </article>
      </div>
    </li>
  );
}
