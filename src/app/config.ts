interface IConfig {
  debug: boolean;
  debug_appVersion: number;
  timeoutIfUiTreeNotFound: number;
  searchInputDelay: number;
  appWrapperWidth: number;
  webAppHeight: number;
  desktopBreakPoint: number;
}

export const config: IConfig = {
  debug: false,
  debug_appVersion: 0.12,
  timeoutIfUiTreeNotFound: 10000,
  searchInputDelay: 250,
  appWrapperWidth: 1200,
  desktopBreakPoint: 800,
  webAppHeight: 700,
};
