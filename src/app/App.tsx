import React, { useEffect, createContext, useState, useRef } from "react";
import { HashRouter } from "react-router-dom";
import walkme, { ISdk, WalkMeApp } from "@walkme/sdk";

import {
  tmPlatformType,
  TEACHME_ERROR,
  PLATFORM_ERROR,
  defaultInitialTMState,
  defaultUserData,
} from "./consts/app";
import { config } from "./config";

import {
  InformationScreenType,
  IInformationScreenData,
} from "./interfaces/information-screen/informationScreen.interface";
import { ITeachMeContext } from "./interfaces/teachme/teachme.interface";

import {
  getCoursesTotalStatus,
  parseCoursesBE,
} from "./layout/screens/courses-screen/coursesUtils";
import useAppManager from "./hooks/useAppManager";
import InformationScreen from "./layout/screens/information-screen/InformationScreen";
import Debug from "./layout/debug/Debug";
import Main from "./layout/main/Main";
import Sidebar from "./layout/sidebar/Sidebar";

import "../styles/index.less";
import useWindowResize from "./hooks/useWindowResize";
import Minimize from "./components/buttons/minimize/Minimize";

export const TeachMeContext = createContext<ITeachMeContext | null>(null);

export default function App() {
  const app = useRef();
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
  const isDesktop = windowWidth >= desktopBreakPoint;

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
   * Initial SDK and
   */
  useEffect(() => {
    (async () => {
      let timeout;
      let informationScreenData = informationScreen as IInformationScreenData;
      const platformTypeParam = getUrlParamValueByName("platform");
      const teachmeParam = getUrlParamValueByName("teachme");

      if (!platformTypeParam || !teachmeParam) {
        informationScreenData = {
          type: InformationScreenType.NoConnection,
          error: !platformTypeParam ? PLATFORM_ERROR : TEACHME_ERROR,
        };
        setInformationScreen(informationScreenData);
      } else {
        try {
          await walkme.init();
          console.log("WalkMe ready =>", walkme);

          // Walkme Guard
          if (walkme) {
            setWalkmeSDK(walkme);
          }

          const teachme = await walkme.apps.getApp("teachme");
          const tmCourses = await teachme.getContent();

          console.log("tmCourses =>", tmCourses);

          const parsedCourses = parseCoursesBE(tmCourses);

          console.log("parsedCourses =>", parsedCourses);

          // Teachme Guard
          if (teachme) {
            setTeachmeApp(teachme);
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
          console.error(err);
          clearTimeout(timeout);
        }
      }
    })();
  }, []);

  useEffect(() => {
    // window's width smallest than desktopBreakPoint window's height bigger than webAppHeight
    const shouldUpdateCssProperties = !isDesktop && windowHeight > webAppHeight;
    const shouldCloseSidebar =
      isWebApp && sidebarIsOpen && windowWidth < appWrapperWidth;

    if (shouldUpdateCssProperties) {
      setGlobalCssProperties({ "--webAppHeight": `${windowHeight}px` });
    } else {
      setGlobalCssProperties({});
    }
    if (shouldCloseSidebar) {
      setSidebarIsOpen(false);
    }
  }, [windowWidth, windowHeight, isDesktop]);

  return (
    <HashRouter>
      <div
        ref={app}
        className={`app show wrapper`}
        style={globalCssProperties as React.CSSProperties}
      >
        {informationScreen ? (
          <InformationScreen {...informationScreen} isWebApp={isWebApp} />
        ) : (
          <TeachMeContext.Provider
            value={{
              walkmeSDK,
              teachmeApp,
              tmState,
              sidebar: sidebarOptions,
            }}
          >
            <Debug />
            {isWebApp && <Minimize />}
            <Sidebar />
            <Main className={sidebarState} />
          </TeachMeContext.Provider>
        )}
      </div>
    </HashRouter>
  );
}
