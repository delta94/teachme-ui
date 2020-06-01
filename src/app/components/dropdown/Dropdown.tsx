import React, { useState } from "react";

// interfaces
import { CourseState } from "../../interfaces/courses/courses.interface";

// components
import Button, { ButtonType } from "../buttons/Button";
import List from "../list/List";
import { IListItem, IListItemState } from "../list/list-item/ListItem";
import MessageContainer from "../message-container/MessageContainer";

// hooks
import useIconManager, { IconType, Icon } from "../../hooks/useIconManager";

// styles
import "../../../styles/components/dropdown/dropdown.less";

export default function Dropdown<T>({
  id,
  title,
  items,
  className,
  isOpen,
  isCollapsible = true,
  handler,
  disabledMsg,
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
  disabledMsg?: string;
}) {
  const [open, setOpen] = useState(isOpen);
  const { getIconByType } = useIconManager();
  const isDisabled = handler.state === CourseState.Disabled;
  const collapsibleClass = isCollapsible ? "collapsible" : "";
  const dropdownToggle = open ? "open" : "close";

  const handlerClicked = () => {
    if (isCollapsible) {
      setOpen((prevOpen) => !prevOpen);
    }
  };

  return (
    <div
      className={`dropdown-wrapper ${className} ${handler.state} ${collapsibleClass} ${dropdownToggle}`}
    >
      {isDisabled && disabledMsg && (
        <>
          <MessageContainer
            message={disabledMsg}
            className="disabled-message"
            type={handler.state}
          />
        </>
      )}
      <header className={`dropdown-handler ${open ? "open" : "close"}`}>
        <Button
          id={id}
          tmButtonType={ButtonType.NoBorder}
          buttonClicked={handlerClicked}
        >
          <h4 title={title}>
            {title} {getIconByType(handler.state)}
            {getIconByType(Icon.Dropdown)}
          </h4>
        </Button>
      </header>
      <div className={`dropdown-items ${open ? "open" : "close"}`}>
        <List className="dropdown-list" items={items} />
      </div>
    </div>
  );
}
