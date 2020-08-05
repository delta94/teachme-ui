import React, { createContext, useState, useEffect } from "react";
// walkme SDK
import walkme, { ISdk, WalkMeApp } from "@walkme/sdk";

// interfaces
import { ITeachMeContext, tmPlatformType } from "../app.interface";
import {
  InformationScreenType,
  IInformationScreenData,
} from "../components/layout/screens/information-screen/informationScreen.interface";

// hooks & utils
import useAppManager from "../hooks/useAppManager";
import {
  parseCoursesBE,
  getCoursesTotalStatus,
} from "../components/layout/screens/courses/courses.utils";

// constants
import { config } from "../constants/config";
import { defaultInitialTMState } from "../constants/app";

// context
export const TeachMeContext = createContext<ITeachMeContext | null>(null);

declare global {
  interface Window {
    walkme: any;
    teachme: any;
  }
}

export default function TeachmeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { timeoutIfUiTreeNotFound, debug } = config;
  const {
    addGuidSpecificStyle,
    getDebugError,
    getUrlParamValueByName,
  } = useAppManager();

  const [walkmeSDK, setWalkmeSDK] = useState({} as ISdk);
  const [walkmeSDKError, setWalkmeSDKError] = useState(null);
  const [teachmeApp, setTeachmeApp] = useState({} as WalkMeApp);
  const [tmState, setTMState] = useState(defaultInitialTMState);
  const { initiated, isWebApp } = tmState;
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [informationScreen, setInformationScreen] = useState({
    type: InformationScreenType.Loading,
    isWebApp,
  } as IInformationScreenData);

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

        const getParsedCourses = async () => {
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
            courses: {
              percentCompletion: getCoursesTotalStatus(parsedCourses),
            },
          };
          return { tmUser, parsedCourses }
        }

        const { tmUser, parsedCourses } = await getParsedCourses();

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

        teachmeApp.bindToContentUpdate(async () => {
          const { parsedCourses } = await getParsedCourses();
          setTMState({
            ...tmState,
            tmCourses: parsedCourses
          });
        })
      } catch (err) {
        console.log("err ", err);
        setWalkmeSDKError(err);
        clearTimeout(timeout);
      }
    })();
  }, []);

  return (
    <TeachMeContext.Provider
      value={{
        walkmeSDK,
        teachmeApp,
        appState: { tmState, setTMState },
        sidebar: { sidebarIsOpen, setSidebarIsOpen },
        infoScreen: { informationScreen, setInformationScreen },
      }}
    >
      {children}
    </TeachMeContext.Provider>
  );
}
