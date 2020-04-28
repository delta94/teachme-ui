import { tabs } from "./consts/tabs";

interface IConfig {
  debug: boolean;
  debug_appVersion: number;
  initTab: number;
  timeoutIfUiTreeNotFound: number;
  searchInputDelay: number;
}

export const config: IConfig = {
  debug: false,
  debug_appVersion: 0.12,
  initTab: tabs.firstTab,
  timeoutIfUiTreeNotFound: 10000,
  searchInputDelay: 250,
};
