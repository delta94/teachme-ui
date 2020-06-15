import React from "react";
import { Link } from "react-router-dom";

// components
import Button, { ButtonType } from "..";

// hooks
import useIconManager, { IconType } from "../../../../hooks/useIconManager";

export default function RouteButton({
  id,
  iconType,
  label,
  linkTo,
  buttonType = ButtonType.None,
  className,
}: {
  id: string;
  label: string;
  linkTo: string;
  buttonType?: ButtonType;
  iconType?: IconType;
  className?: string;
}) {
  const { getIconByType } = useIconManager();

  return (
    <Button className={className} id={id} tmButtonType={buttonType}>
      <Link to={linkTo}>
        <span className="btn-label">
          {getIconByType(iconType)}
          {label}
        </span>
      </Link>
    </Button>
  );
}
