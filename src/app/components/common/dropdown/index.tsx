import React, { useState } from "react";
import cc from "classcat";

// interfaces
import { CourseState } from "../../layout/screens/courses/courses.interface";

import { ButtonType } from "../button/interface";
import { IListItem, IListItemState } from "../list/list.interface";

// components
import Button from "../button";
import List from "../list";
import MessageContainer from "../message-container";

// hooks
import useIconManager, { IconType, Icon } from "../../../hooks/useIconManager";

// styles
import "./index.less";
import { IDropdownProps } from "./dropdown.interface";

export default function Dropdown<T>({
  id,
  title,
  items,
  className,
  isOpen,
  isCollapsible = true,
  handler,
  disabledMsg,
}: IDropdownProps<T>) {
  const [open, setOpen] = useState(isOpen);
  const { getIconByType } = useIconManager();
  const isDisabled = handler.state === CourseState.Disabled;
  const dropdownToggleClasses = {
    open: open,
    close: !open,
  };

  const handlerClicked = () => {
    if (isCollapsible) {
      setOpen((prevOpen) => !prevOpen);
    }
  };

  return (
    <div
      className={cc([
        "dropdown-wrapper",
        className,
        handler.state,
        {
          collapsible: isCollapsible,
          ...dropdownToggleClasses,
        },
      ])}
    >
      {isDisabled && disabledMsg && (
        <MessageContainer
          message={disabledMsg}
          className="disabled-message"
          type={handler.state}
        />
      )}
      <header className={cc(["dropdown-handler", dropdownToggleClasses])}>
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
      <div className={cc(["dropdown-items", dropdownToggleClasses])}>
        <List className="dropdown-list" items={items} />
      </div>
    </div>
  );
}
