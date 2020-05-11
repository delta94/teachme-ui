import {
  WalkMeApp,
  ContentItem,
  LanguageItem,
  ISdk,
} from "@walkme/sdk/dist/interfaces/sdk";
import { IUserData } from "../user/user.interface";
import { ICourse } from "../courses/courses.interface";

export interface ITMState {
  tmCourses: ICourse[];
  initiated: boolean;
  debugError: string;
  platformType: string;
  isWebApp: boolean;
  tmUser: IUserData;
}

export interface sidebarOptions {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITeachMeContext {
  tmState: ITMState;
  walkmeSDK: ISdk;
  teachmeApp: WalkMeApp;
  sidebar: sidebarOptions;
}
