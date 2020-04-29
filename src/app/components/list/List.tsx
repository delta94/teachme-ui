import React, { ReactElement } from "react";
import ListItem, { IListItem, IItemComponentProps } from "./ListItem";

export default function List<T>({
  className,
  items,
  onSelect,
  itemComponent,
  type = "",
}: {
  className?: string;
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
            key={item.id}
            item={item}
            onSelect={onSelect}
            itemComponent={itemComponent}
          />
        );
      })}
    </ul>
  );
}
