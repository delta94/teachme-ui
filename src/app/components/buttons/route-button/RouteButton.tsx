import React from "react";
import Button, { ButtonType } from "../Button";
import { Link } from "react-router-dom";

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
  iconType?: string;
  className?: string;
}) {
  const getIconByType = (type: string) => {
    if (type === "back") {
      return <span className="icon arrow-left"></span>;
    }
    return <></>;
  };

  return (
    <Button className={className} id={id} tmButtonType={buttonType}>
      <Link to={linkTo}>
        <span className="btn-label">
          {iconType && getIconByType(iconType)}
          {label}
        </span>
      </Link>
    </Button>
  );
}
