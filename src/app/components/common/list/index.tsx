import React, { ReactElement } from "react";

// interfaces
import { IListItem, IItemComponentProps } from "./list.interface";

// components
import ListItem from "./list-item";

// styles
import "./index.less";

export default function List<T>({
  className,
  itemClassName,
  items,
  onSelect,
  itemComponent,
  type = "",
}: {
  className?: string;
  itemClassName?: string;
  type?: string;
  items: IListItem<T>[];
  onSelect?: (selected: IListItem<T>) => void;
  itemComponent?: (props?: IItemComponentProps<T>) => ReactElement;
}) {
  return (
    <ul className={`list ${type} ${className}`}>
      {items.map((item) => {
        return (
          <ListItem
            key={`list-item-${type}-${item.id}`}
            item={item}
            className={itemClassName}
            onSelect={onSelect}
            state={item.state}
            type={item.type}
            itemComponent={itemComponent}
          />
        );
      })}
    </ul>
  );
}
