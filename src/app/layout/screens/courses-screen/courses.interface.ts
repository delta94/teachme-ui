import { IListItem } from "../../../components/list/list-item/ListItem";

export enum CourseState {
  NotStarted = "not-started",
  Started = "started",
  Completed = "completed",
  Tested = "tested",
}

export interface ILesson {
  id: string;
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
