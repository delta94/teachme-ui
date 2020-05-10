import React, { useEffect, createContext, useState } from "react";
import { HashRouter } from "react-router-dom";

import walkme, { ISdk, WalkMeApp } from "@walkme/sdk";

import { ICourse } from "./layout/screens/courses-screen/courses.interface";
import { IUserData } from "./interfaces/user/user.interface";
import InformationScreen, {
  IInformationScreenData,
  InformationScreenType,
} from "./layout/screens/information-screen/InformationScreen";

import { config } from "./config";
import {
  getCoursesTotalStatus,
  parseCoursesBE,
} from "./layout/screens/courses-screen/coursesUtils";
import { tmPlatformType, TEACHME_ERROR, PLATFORM_ERROR } from "./consts/app";
import useAppManager from "./hooks/useAppManager";
import Debug from "./layout/debug/Debug";
import Header from "./layout/header/Header";
import Main from "./layout/main/Main";

import "../styles/index.less";
import Sidebar from "./layout/sidebar/Sidebar";

export const defaultUserData: IUserData = {
  user: {
    firstName: "Dan",
    LastName: "Israeli",
  },
  courses: {
    percentCompletion: 20,
  },
};

interface ITMState {
  tmCourses: ICourse[];
  initiated: boolean;
  debugError: string;
  platformType: string;
  isWebApp: boolean;
  tmUser: IUserData;
}

const defaultInitialTMState: ITMState = {
  tmCourses: [] as ICourse[],
  initiated: false,
  debugError: "",
  platformType: "",
  isWebApp: false,
  tmUser: defaultUserData,
};

interface sidebarOptions {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ITeachMeContext {
  tmState: ITMState;
  walkmeSDK: ISdk;
  teachmeApp: WalkMeApp;
  sidebar: sidebarOptions;
}

export const TeachMeContext = createContext<ITeachMeContext | null>(null);

export default function App() {
  const {
    addGuidSpecificStyle,
    getDebugError,
    getUrlParamValueByName,
  } = useAppManager();

  const [walkmeSDK, setWalkmeSDK] = useState({} as ISdk);
  const [teachmeApp, setTeachmeApp] = useState({} as WalkMeApp);
  const [tmState, setTMState] = useState(defaultInitialTMState);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const sidebarOptions = { isOpen: sidebarIsOpen, setIsOpen: setSidebarIsOpen };
  const [informationScreen, setInformationScreen] = useState({
    type: InformationScreenType.Loading,
  } as IInformationScreenData);

  const { initiated, isWebApp } = tmState;

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
      if (config.debug) displayDebugInfo();
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
          const parseCourses = parseCoursesBE(tmCourses);

          // Teachme Guard
          if (teachme) {
            setTeachmeApp(teachme);
          }

          // set tmUser data
          const tmUser = {
            user: defaultUserData.user,
            courses: {
              percentCompletion: getCoursesTotalStatus(parseCourses),
            },
          };

          const isWebApp =
            getUrlParamValueByName("tm-type") === tmPlatformType.Web;

          // Cleanups before set state
          timeout = setTimeout(() => {
            throw new Error(
              `Search timeout, could not get uiTree in ${config.timeoutIfUiTreeNotFound}ms`
            );
          }, config.timeoutIfUiTreeNotFound);

          clearTimeout(timeout);
          setTMState({
            ...tmState,
            tmUser,
            tmCourses: parseCourses,
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

  return (
    <HashRouter>
      <div
        className={`app show wrapper ${sidebarIsOpen ? "with-sidebar" : ""}`}
      >
        {informationScreen ? (
          <InformationScreen {...informationScreen} />
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
            <Sidebar />
            <Main />
          </TeachMeContext.Provider>
        )}
      </div>
    </HashRouter>
  );
}
