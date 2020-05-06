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
