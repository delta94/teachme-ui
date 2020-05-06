import React, { useEffect, createContext, useState } from "react";
import { HashRouter } from "react-router-dom";

import walkme, { ISdk, WalkMeApp } from "@walkme/sdk";

import { IUserData } from "./interfaces/user/user.interface";
import InformationScreen, {
  IInformationScreenData,
  InformationScreenType,
} from "./layout/screens/information-screen/InformationScreen";

import { config } from "./config";
import { tmPlatformType } from "./consts/platform";
import useAppManager from "./hooks/useAppManager";
import Debug from "./layout/debug/Debug";
import Header from "./layout/header/Header";
import Main from "./layout/main/Main";

import "../styles/index.less";

export const defaultUserData: IUserData = {
  user: {
    firstName: "Dan",
    LastName: "Israeli",
  },
  courses: {
    totalProgressBar: 20,
  },
};

interface IDefaultInitialState {
  courses: any[];
  initiated: boolean;
  debugError: string;
  platformType: string;
  isWebApp: boolean;
  tmUser: IUserData;
}

const defaultInitialTMState: IDefaultInitialState = {
  courses: [] as any[],
  initiated: false,
  debugError: "",
  platformType: "",
  isWebApp: false,
  tmUser: defaultUserData,
};

export const TeachMeContext = createContext({
  tmState: defaultInitialTMState,
  walkmeSDK: {} as ISdk,
  teachmeApp: {} as WalkMeApp,
});

export default function App() {
  const {
    addGuidSpecificStyle,
    getDebugError,
    getUrlParamValueByName,
  } = useAppManager();
  const [walkmeSDK, setWalkmeSDK] = useState({} as ISdk);
  const [teachmeApp, setTeachmeApp] = useState({} as WalkMeApp);
  const [tmState, setTMState] = useState(defaultInitialTMState);
  const [informationScreen, setInformationScreen] = useState({
    type: InformationScreenType.Loading,
  } as IInformationScreenData);
  const { initiated } = tmState;

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
      //App.onWindowReady();

      // setTimeout(() => {
      //   setTMState({
      //     ...tmState,
      //     informationScreen: null as IInformationScreenData,
      //   });
      // }, 500);
    }
  }, [initiated]);

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
        const platformError =
          "Walkme did not return data, try setting a query param platform=mock";
        const teachmeError =
          "Teachme did not return data, try setting a query param teachme=mock";
        informationScreenData = {
          type: InformationScreenType.NoConnection,
          error: !platformTypeParam ? platformError : teachmeError,
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
          let courses;
          courses = await teachme.getContent();

          // Teachme Guard
          if (teachme) {
            setTeachmeApp(teachme);
          } else {
            informationScreenData = {
              type: InformationScreenType.NoConnection,
              error:
                "Teachme did not return data, try setting a query param teachme=mock",
            };
            setInformationScreen(informationScreenData);
          }

          console.log("courses", courses);

          // Cleanups before set state
          timeout = setTimeout(() => {
            throw new Error(
              `Search timeout, could not get uiTree in ${config.timeoutIfUiTreeNotFound}ms`
            );
          }, config.timeoutIfUiTreeNotFound);

          clearTimeout(timeout);
          setTMState({
            ...tmState,
            courses,
            initiated: true,
            platformType: platformTypeParam,
            isWebApp: getUrlParamValueByName("tm-type") === tmPlatformType.Web,
          });
          setInformationScreen(null as IInformationScreenData);
        } catch (err) {
          console.error(err);
          clearTimeout(timeout);
          // App.initializeWithError();
        }
      }
    })();
  }, []);

  return (
    <HashRouter>
      <div className="app show">
        {informationScreen ? (
          <InformationScreen {...informationScreen} />
        ) : (
          <TeachMeContext.Provider value={{ walkmeSDK, teachmeApp, tmState }}>
            <Debug />
            <Header />
            <Main />
          </TeachMeContext.Provider>
        )}
      </div>
    </HashRouter>
  );
}
