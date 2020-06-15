import { WalkMeApp, ISdk } from "@walkme/sdk/dist/interfaces/sdk";
import { ICourse } from "./components/layout/screens/courses/interface";

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

interface IUser {
  firstName: string;
  LastName: string;
}
export interface IUserData {
  user: IUser;
  courses: {
    percentCompletion: number;
  };
}

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
