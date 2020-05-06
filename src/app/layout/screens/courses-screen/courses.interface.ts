import { Icon } from "../../../hooks/useIconManager";

export enum CourseState {
  NotStarted = "not-started",
  Started = "started",
  Completed = "completed",
  Tested = "tested",
}

export type TaskIcon =
  | CourseItemType.Article
  | CourseItemType.Video
  | CourseItemType.WalkThru;

export enum CourseItemType {
  Article = "article",
  Video = "video",
  WalkThru = "smart-walkthru",
  Lesson = "lesson",
}

export interface ILessonData {
  state?: CourseState;
}
export interface ILessonListItem {
  id: string;
  title: string;
  data?: ILessonData;
}

export interface ITask {
  id: string;
  title: string;
  state?: CourseState;
  icon?: TaskIcon;
  link?: string;
}
export interface ILesson {
  id: string;
  title: string;
  tasks?: ITask[];
  state?: CourseState;
}

export interface ICourseMedia {
  thumbnail: {
    ratio_1_1?: string;
    ratio_2_1?: string;
  };
}

export interface IQuiz {
  id: string;
  title: string;
  link: string;
  description?: string;
  state?: CourseState;
  data?: {
    state?: CourseState;
  };
  media: ICourseMedia;
}

export interface ICourseTask {
  id: string;
  title: string;
  description?: string;
  properties?: IProperties;
  type?: CourseItemType;
  state?: CourseState;
}

export interface ICourseItem extends ICourseTask {
  lessonNumber?: number;
  tasks?: ICourseTask[];
}

export interface ICourse {
  id: string;
  title: string;
  properties?: IProperties;
  data?: {
    state?: CourseState;
    status?: number;
  };
  items?: ICourseItem[];
  media: ICourseMedia;
  lessons?: ILesson[]; // TODO: should deprecate
  tasks?: ITask[]; // TODO: should deprecate
  quiz?: IQuiz; // TODO: should change
}

export interface ICourseData {
  state?: CourseState;
  status?: number;
  media?: ICourseMedia;
}

export interface IProperties {
  isDisabled?: boolean;
  isEnabled?: boolean;
  passmark?: number;
  resultsViewActive?: boolean;
  isCompleted?: boolean;
}

export interface ICourseBE {
  title: string;
  items: ICourseItemBE[];
  quiz?: any; // TODO - add types
  properties?: IProperties;
}

export interface ICourseItemBE {
  id: number;
  title: string;
  description?: string;
  properties: IProperties;
  type?: CourseItemType;
  childNodes?: ICourseItemBE[];
}
