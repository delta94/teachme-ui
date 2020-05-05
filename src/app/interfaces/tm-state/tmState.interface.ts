import {
  WalkMeApp,
  ContentItem,
  LanguageItem,
} from "@walkme/sdk/dist/interfaces/sdk";
import { IUserData } from "../user/user.interface";

export interface ITMState {
  wmSearch: WalkMeApp;
  wmNotification: WalkMeApp;
  wmUiTree: ContentItem[];
  wmLanguages: LanguageItem[];
  initiated: boolean;
  debugError: string;
  platformType: string;
  includeLayout: boolean;
  informationScreen?: string; // TODO: check this issue
  tmUser: IUserData;
}
