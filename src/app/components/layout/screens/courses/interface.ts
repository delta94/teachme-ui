import { Icon } from "../../../../hooks/useIconManager";

export enum CourseState {
  Disabled = "disabled",
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
  id: number;
  title: string;
  data?: ILessonData;
}

export interface ICourseMedia {
  thumbnail: {
    ratio_1_1?: string;
    ratio_2_1?: string;
  };
}

export interface IWMButton {
  text: string;
  id: string;
}

export interface IWMScreen {
  buttonText?: string; // should deprecate soon
  buttons?: IWMButton[];
  description: string;
  title: string;
}

export interface IWMAnswer {
  id: number;
  isCorrect: boolean;
  text: string;
}

export interface IWMQuestion {
  type: number;
  id: number;
  title: string;
  description?: string;
  explanation?: string;
  answers: IWMAnswer[];
}

// TODO - add types
export interface IQuizBE {
  properties?: IProperties;
  welcomeScreen?: IWMScreen;
  failScreen?: IWMScreen;
  successScreen?: IWMScreen;
  questions?: IWMQuestion[];
}

export interface IQuiz {
  id: number;
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
  courseId?: number;
  id: number;
  title: string;
  description?: string;
  properties?: IProperties;
  type?: CourseItemType;
  state?: CourseState;
}

export interface ICourseItem extends ICourseTask {
  tasks?: ICourseTask[];
}

export interface ICourse {
  id: number;
  title: string;
  properties?: IProperties;
  data?: {
    state?: CourseState;
    status?: number;
  };
  items?: ICourseItem[];
  media: ICourseMedia;
  quiz?: IQuizBE;
}

export interface ICourseData {
  state?: CourseState;
  status?: number;
  media?: ICourseMedia;
}

export interface IProperties {
  isAvailable?: boolean;
  isDisabled?: boolean;
  isEnabled?: boolean;
  passmark?: number;
  resultsViewActive?: boolean;
  isCompleted?: boolean;
}

export interface ICourseBE {
  id: number;
  title: string;
  items: ICourseItemBE[];
  quiz?: IQuizBE;
  properties?: IProperties;
}

export interface ICourseItemChildNodeBE extends ICourseItemBE {
  courseId?: number;
  lessonId?: number;
}
export interface ICourseItemBE {
  id: number;
  courseId?: number;
  title: string;
  description?: string;
  properties?: IProperties;
  type?: CourseItemType;
  itemType?: CourseItemType;
  childNodes?: ICourseItemChildNodeBE[];
}
