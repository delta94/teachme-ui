import { ReactElement } from "react";
import { IconType } from "../../../hooks/useIconManager";

export enum ButtonType {
  NoBorder = "no-border",
  None = "none",
  Default = "default",
  Danger = "danger",
  Warning = "warning",
  Help = "help",
  Visited = "visited",
  Completed = "completed",
}

export interface IButtonProps {
  id: string;
  className?: string;
  tmButtonType?: ButtonType;
  type?: "button" | "submit" | "reset";
  buttonClicked?: (id: string) => void;
  children: ReactElement;
}

export interface IRouteButtonProps {
  id: string;
  label: string;
  linkTo: string;
  buttonType?: ButtonType;
  iconType?: IconType;
  className?: string;
  onClick? : (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}
