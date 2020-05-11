import { ICourse } from "../interfaces/courses/courses.interface";
import { IUserData } from "../interfaces/user/user.interface";
import { ITMState } from "../interfaces/teachme/teachme.interface";

export enum wmPlatformType {
  Mac = "mac",
  Mock = "mock",
  Web = "web",
  Windows = "windows",
}

export enum tmPlatformType {
  App = "app",
  Web = "web",
}

export const PLATFORM_ERROR =
  "Walkme did not return data, try setting a query param `?platform=mock`";
export const TEACHME_ERROR =
  "Teachme did not return data, try setting a query param `&teachme=mock`";

export const LIST_ITEM_DISABLED_MSG =
  "This item is not completed and unavailable";
export const LESSON_DISABLED_MSG =
  "This lesson requires the completion of all previous lessons";
export const COURSE_DISABLED_MSG =
  "This course requires completion of all pervious";

export const defaultUserData: IUserData = {
  user: {
    firstName: "Dan",
    LastName: "Israeli",
  },
  courses: {
    percentCompletion: 20,
  },
};

export const defaultInitialTMState: ITMState = {
  tmCourses: [] as ICourse[],
  initiated: false,
  debugError: "",
  platformType: "",
  isWebApp: false,
  tmUser: defaultUserData,
};
