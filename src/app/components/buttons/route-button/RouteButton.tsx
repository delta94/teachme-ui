import React from "react";
import Button, { ButtonType } from "../Button";
import { Link } from "react-router-dom";
import useIconManager, { IconType } from "../../../hooks/useIconManager";
import { CourseState } from "../../../interfaces/courses/courses.interface";

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
