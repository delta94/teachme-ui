import React, { useState, useRef } from "react";

import Button, { ButtonType } from "../buttons/Button";
import List from "../list/List";
import { IListItem, IListItemState } from "../list/list-item/ListItem";
import useIconManager, { IconType } from "../../hooks/useIconManager";

export default function Dropdown<T>({
  id,
  title,
  items,
  className,
  isOpen,
  isCollapsible = true,
  handler,
}: {
  id: string;
  title: string;
  items: IListItem<T>[];
  className?: string;
  isOpen?: boolean;
  isCollapsible?: boolean;
  handler?: {
    state?: IListItemState;
    iconType?: IconType;
  };
}) {
  const [open, setOpen] = useState(isOpen);
  const handlerIcon = useIconManager(handler && handler.state);

  const handlerClicked = () => {
    if (isCollapsible) {
      setOpen((prevOpen) => !prevOpen);
    }
  };

  return (
    <div
      className={`dropdown-wrapper ${className} ${
        isCollapsible ? "collapsible" : ""
      }`}
    >
      <header className={`dropdown-handler ${open ? "open" : "close"}`}>
        <Button
          id={id}
          tmButtonType={ButtonType.NoBorder}
          buttonClicked={handlerClicked}
        >
          <h4>
            {title} {handlerIcon}
          </h4>
        </Button>
      </header>
      <div className={`dropdown-items ${open ? "open" : "close"}`}>
        <List className="dropdown-list" items={items} />
      </div>
    </div>
  );
}
