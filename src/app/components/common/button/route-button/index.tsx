import React from "react";
import { Link } from "react-router-dom";

// interfaces
import { ButtonType, IRouteButtonProps } from "../interface";

// components
import Button from "..";

// hooks
import useIconManager from "../../../../hooks/useIconManager";

export default function RouteButton({
  id,
  iconType,
  label,
  linkTo,
  buttonType = ButtonType.None,
  className,
  onClick
}: IRouteButtonProps) {
  const { getIconByType } = useIconManager();

  return (
    <Button className={className} id={id} tmButtonType={buttonType}>
      <Link to={linkTo}  onClick={onClick}>
        <span className="btn-label">
          {getIconByType(iconType)}
          {label}
        </span>
      </Link>
    </Button>
  );
}
