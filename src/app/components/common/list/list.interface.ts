import { ReactElement } from "react";

import {
  CourseItemType,
  CourseState,
  ICourseData,
  ICourseItem,
} from "../../layout/screens/courses/courses.interface";
import { IconType } from "../../../hooks/useIconManager";

/**
 * Generic list interfaces
 */

export interface IItemComponentProps<T> {
  onSelect?: () => void;
  item: IListItem<T>;
}

export type IListItemState = CourseState;

export interface IListItem<T> {
  id: number;
  courseId?: number;
  title: string;
  subTitle?: string;
  description?: string;
  link?: string;
  clickable?: boolean;
  useWalkMeSdk?: boolean;
  state?: IListItemState;
  type?: CourseItemType;
  data?: T;
  disabledMsg?: string;
  tasks?: IListItem<{}>[];
  primaryBtn?: {
    label: string;
  };
}

export interface IListItemProps<T> {
  item: IListItem<T>;
  className?: string;
  state?: IListItemState;
  type?: CourseItemType;
  onSelect?: (selected: IListItem<T>) => void;
  itemComponent?: (props?: IItemComponentProps<T>) => ReactElement;
}

/**
 * TeachMe list item interface
 */
export interface ITMListItemProps extends IItemComponentProps<ICourseData> {
  /**
   * hideProgressBar:  an optional props - prevent rendering the progress bar
   */
  hideProgressBar?: boolean;
  /**
   * extraLabel: an optional props to render extra label next to buttonLabelState
   */
  extraLabel?: string;
  /**
   * overrideLabel: an optional props to override the button default text
   */
  overrideLabel?: string;
  /**
   * iconType: an optional props to override the default button icon text
   */
  iconType?: IconType;
  /**
   * hideButtonIcon: an optional props to hide button icon
   */
  hideButtonIcon?: boolean;
}

export type ITMListItemFooter = Omit<ITMListItemProps, "hideProgressBar">;

export interface ITMListItemFooterProps {
  itemButtonClicked?: () => void;
  tmListItemFooter: ITMListItemFooter;
}

export interface ITMListItemHeaderProps {
  title: string;
  subTitle?: string;
  description?: string;
}

export interface ITMListItemThumbnailProps {
  title: string;
  thumbSrcRatio_1_1: string;
  thumbSrcRatio_2_1: string;
}

/**
 * Course items list item interface
 */
export interface ICourseItemsListProps {
  items: ICourseItem[];
  selectedTaskId?: number;
}

/**
 * Course Lesson items list item interface
 */
export interface ILessonListItemProps {
  item: ICourseItem;
  isOpen: boolean;
  className?: string;
}
