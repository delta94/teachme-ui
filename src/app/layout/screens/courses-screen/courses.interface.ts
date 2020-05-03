import { IListItem } from "../../../components/list/list-item/ListItem";

export enum CourseState {
  NotStarted = "not-started",
  Started = "started",
  Completed = "completed",
  Tested = "tested",
}

export interface ILessonData {
  state?: CourseState;
}
export interface ILessonListItem {
  id: string;
  title: string;
  data?: ILessonData;
}

export interface ILessonTask {
  id: string;
  title: string;
  state?: CourseState;
  icon?: string;
  link?: string;
}
export interface ILesson {
  id: string;
  title: string;
  tasks?: ILessonTask[];
}

export interface ICourseMedia {
  thumbnail: {
    ratio_1_1?: string;
    ratio_2_1?: string;
  };
}

export interface ICourse {
  id: string;
  title: string;
  data?: {
    state?: CourseState;
    status?: number;
  };
  media: ICourseMedia;
  lessons: ILesson[];
}

export interface ICourseData {
  state?: CourseState;
  status?: number;
  media?: ICourseMedia;
}

export interface ICourseListItem extends IListItem<ICourseData> {
  thumbnailSrc: string;
}
