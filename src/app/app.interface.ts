import { WalkMeApp, ISdk } from "@walkme/sdk/dist/interfaces/sdk";
import { ICourse } from "./components/layout/screens/courses/courses.interface";
import { IInformationScreenData } from "./components/layout/screens/information-screen/informationScreen.interface";

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

export interface IUserData {
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
export interface ISidebarOptions {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IInfoScreenOptions {
  informationScreen: IInformationScreenData;
  setInformationScreen: React.Dispatch<
    React.SetStateAction<IInformationScreenData>
  >;
}

export interface IAppStateOptions {
  tmState: ITMState;
  setTMState: React.Dispatch<React.SetStateAction<ITMState>>;
}

export interface ITeachMeContext {
  appState: IAppStateOptions;
  walkmeSDK: ISdk;
  teachmeApp: WalkMeApp;
  sidebar: ISidebarOptions;
  infoScreen: IInfoScreenOptions;
  updateContent :  () => void
}
