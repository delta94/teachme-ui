import React, { useEffect, createContext, useState } from "react";
import { HashRouter } from "react-router-dom";
import walkme, { ISdk, WalkMeApp } from "@walkme/sdk";

// config && consts
import { config } from "./config";
import { defaultInitialTMState, defaultUserData } from "./consts/app";

// interfaces
import { tmPlatformType } from "./interfaces/app.interface";
import {
  InformationScreenType,
  IInformationScreenData,
} from "./interfaces/information-screen/informationScreen.interface";
import { ITeachMeContext } from "./interfaces/teachme/teachme.interface";

// utils & hooks
import { getCoursesTotalStatus, parseCoursesBE } from "./utils/coursesUtils";
import useAppManager from "./hooks/useAppManager";
import useWindowResize from "./hooks/useWindowResize";

// components
import InformationScreen from "./components/layout/screens/information-screen/InformationScreen";
import Debug from "./components/layout/debug/Debug";
import Main from "./components/layout/main/Main";
import Sidebar from "./components/layout/sidebar/Sidebar";
import Minimize from "./components/common/buttons/minimize/Minimize";

import "./index.less";

declare global {
  interface Window {
    walkme: any;
    teachme: any;
  }
}

// context
export const TeachMeContext = createContext<ITeachMeContext | null>(null);

export default function App() {
  const {
    addGuidSpecificStyle,
    getDebugError,
    getUrlParamValueByName,
  } = useAppManager();
  const { windowWidth, windowHeight } = useWindowResize();

  const {
    timeoutIfUiTreeNotFound,
    appWrapperWidth,
    debug,
    desktopBreakPoint,
    webAppHeight,
  } = config;

  const [walkmeSDK, setWalkmeSDK] = useState({} as ISdk);
  const [walkmeSDKError, setWalkmeSDKError] = useState(null);
  const [teachmeApp, setTeachmeApp] = useState({} as WalkMeApp);
  const [tmState, setTMState] = useState(defaultInitialTMState);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const sidebarOptions = { isOpen: sidebarIsOpen, setIsOpen: setSidebarIsOpen };
  const { initiated, isWebApp } = tmState;
  const [informationScreen, setInformationScreen] = useState({
    type: InformationScreenType.Loading,
    isWebApp,
  } as IInformationScreenData);
  const [globalCssProperties, setGlobalCssProperties] = useState({});
  const sidebarState = sidebarIsOpen ? "sidebar-open" : "sidebar-close";

  /**
   * displayDebugInfo
   */
  const displayDebugInfo = () => {
    setTMState((prevTMState) => {
      return {
        ...prevTMState,
        debugError: getDebugError(),
      };
    });
  };

  /**
   * Calls to app method after app state initiated
   */
  useEffect(() => {
    if (initiated) {
      if (debug) displayDebugInfo();
      addGuidSpecificStyle();
      setInformationScreen(null as IInformationScreenData);
    }
  }, [initiated, isWebApp]);

  /**
   * set information screen data
   */
  useEffect(() => {
    if (Boolean(walkmeSDKError)) {
      setTimeout(() => {
        setInformationScreen((prev) => {
          return {
            ...prev,
            type: InformationScreenType.Error,
            error: walkmeSDKError,
          };
        });
      }, 300);
    }
  }, [walkmeSDKError]);

  /**
   * Initial SDK and
   */
  useEffect(() => {
    (async () => {
      let timeout;
      const platformTypeParam = getUrlParamValueByName("platform");

      try {
        await walkme.init();
        console.log("WalkMe ready =>", walkme);

        // set walkme global
        window.walkme = walkme;

        // Walkme Guard
        if (walkme) {
          setWalkmeSDK(walkme);
        }

        const teachmeApp = await walkme.apps.getApp("teachme");

        // teachmeApp Guard
        if (teachmeApp) {
          setTeachmeApp(teachmeApp);
        } else {
          throw new Error("Something is wrong, No teachmeApp");
        }

        // set teachme global
        window.teachme = teachmeApp;
        let tmCourses = await teachmeApp.getContent();

        if (tmCourses) {
          console.log("tmCourses =>", tmCourses);
        } else {
          throw new Error("Something is wrong, No tmCourses");
        }

        const parsedCourses = tmCourses ? parseCoursesBE(tmCourses) : null;

        if (parsedCourses) {
          console.log("parsedCourses =>", parsedCourses);
        } else {
          throw new Error("Something is wrong, No parsedCourses");
        }

        // set tmUser data
        const tmUser = {
          user: defaultUserData.user,
          courses: {
            percentCompletion: getCoursesTotalStatus(parsedCourses),
          },
        };

        // Cleanups before set state
        timeout = setTimeout(() => {
          throw new Error(
            `Search timeout, could not get uiTree in ${timeoutIfUiTreeNotFound}ms`
          );
        }, timeoutIfUiTreeNotFound);

        clearTimeout(timeout);
        setTMState({
          ...tmState,
          tmUser,
          tmCourses: parsedCourses,
          initiated: true,
          platformType: platformTypeParam,
          isWebApp: getUrlParamValueByName("tm-type") === tmPlatformType.Web,
        });
      } catch (err) {
        console.log("err ", err);
        setWalkmeSDKError(err);
        clearTimeout(timeout);
      }
    })();
  }, []);

  useEffect(() => {
    /**
     * shouldUpdateCssProperties
     * window's width smallest than desktopBreakPoint window's,
     * and window height greater than webAppHeight (config property)
     */
    const shouldUpdateCssProperties =
      windowWidth <= desktopBreakPoint && windowHeight > webAppHeight;

    if (shouldUpdateCssProperties) {
      setGlobalCssProperties({ "--webAppHeight": `${windowHeight}px` });
    } else {
      setGlobalCssProperties({});
    }

    /**
     * shouldCloseSidebar
     * if sidebar is open
     * and window width than appWrapperWidth (config property)
     */
    const shouldCloseSidebar =
      isWebApp && sidebarIsOpen && windowWidth < appWrapperWidth;
    if (shouldCloseSidebar) {
      setSidebarIsOpen(false);
    }
  }, [windowWidth, windowHeight]);

  return (
    <div
      className={`app show wrapper`}
      style={globalCssProperties as React.CSSProperties}
    >
      <TeachMeContext.Provider
        value={{
          walkmeSDK,
          teachmeApp,
          tmState,
          sidebar: sidebarOptions,
        }}
      >
        {informationScreen ? (
          <InformationScreen {...informationScreen} isWebApp={isWebApp} />
        ) : (
          <HashRouter>
            <Debug />
            {isWebApp && <Minimize />}
            <Sidebar />
            <Main className={sidebarState} />
          </HashRouter>
        )}
      </TeachMeContext.Provider>
    </div>
  );
}
