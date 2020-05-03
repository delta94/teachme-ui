import React, { useState, useRef } from "react";

import Button, { ButtonType } from "../buttons/Button";
import List from "../list/List";
import { IListItem } from "../list/list-item/ListItem";
import useIconManager from "../../hooks/useIconManager";

export default function Dropdown<T>({
  id,
  title,
  items,
  className,
  isOpen,
  isCollapsible = true,
  handlerIconType,
}: {
  id: string;
  title: string;
  items: IListItem<T>[];
  className?: string;
  isOpen?: boolean;
  isCollapsible?: boolean;
  handlerIconType?: string;
}) {
  const [open, setOpen] = useState(isOpen);

  const handlerIcon = useIconManager(handlerIconType);

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
      <Button
        id={id}
        tmButtonType={ButtonType.NoBorder}
        className="dropdown-handler"
        buttonClicked={handlerClicked}
      >
        <h4>
          {title} {handlerIcon}
        </h4>
      </Button>
      <div className={`dropdown-items ${open ? "open" : ""}`}>
        <List className="dropdown-list" items={items} />
      </div>
    </div>
  );
}
