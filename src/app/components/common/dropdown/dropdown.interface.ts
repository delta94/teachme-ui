import { IListItem, IListItemState } from "../list/list.interface";
import { IconType } from "../../../hooks/useIconManager";

export interface IDropdownProps<T> {
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
}
