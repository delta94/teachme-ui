import React, { ReactElement } from "react";
import { ICourse } from "../../layout/main/Main";

export interface IItemComponentProps<T> {
  onSelect: () => void;
  item: IListItem<T>;
}

export interface IListItem<T> {
  id: string;
  title: string;
  subTitle?: string;
  thumbnailSrc?: string;
  primaryBtn?: {
    label: string;
  };
  extraData?: T;
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
  const { title, subTitle, thumbnailSrc, primaryBtn } = item;

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
        {thumbnailSrc && (
          <picture className="thumb">
            <img src={thumbnailSrc} alt={title} title={title} />
          </picture>
        )}
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
