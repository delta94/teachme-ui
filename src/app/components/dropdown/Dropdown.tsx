import React from "react";

import Button, { ButtonType } from "../buttons/Button";
import List from "../list/List";
import { IListItem } from "../list/list-item/ListItem";

export default function Dropdown<T>({
  id,
  title,
  items,
  className,
}: {
  id: string;
  title: string;
  items: IListItem<T>[];
  className?: string;
}) {
  return (
    <div className={`dropdown-wrapper ${className}`}>
      <Button
        id={id}
        tmButtonType={ButtonType.NoBorder}
        className="dropdown-title"
      >
        <h4>{title}</h4>
      </Button>
      <hr className="separator" />
      <div className="dropdown-items">
        <List className="dropdown-list" items={items} />
      </div>
    </div>
  );
}
