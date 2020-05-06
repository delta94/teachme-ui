import React, { useEffect, createContext, useState } from "react";
import { HashRouter } from "react-router-dom";

import walkme, { ISdk, WalkMeApp } from "@walkme/sdk";

import { IUserData } from "./interfaces/user/user.interface";
import {
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

const defaultInitialTMState = {
  courses: [] as any[],
  initiated: false,
  debugError: "",
  platformType: "",
  isWebApp: false,
  tmUser: defaultUserData,
  informationScreen: null as IInformationScreenData,
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
    }
  }, [initiated]);

  useEffect;
  /**
   * Initial SDK and
   */
  useEffect(() => {
    (async () => {
      let timeout;
      let informationScreenData = null;

      try {
        await walkme.init();
        console.log("WalkMe ready =>", walkme);

        if (walkme) {
          setWalkmeSDK(walkme);
        } else {
          informationScreenData = {
            type: InformationScreenType.NoConnection,
            error:
              "Walkme did not return data, try setting a query param platform=mock",
          };
        }

        const teachme = await walkme.apps.getApp("teachme");
        let courses;
        courses = await teachme.getContent();

        if (!teachme || !courses) {
          informationScreenData = {
            type: InformationScreenType.NoConnection,
            error:
              "Teachme did not return data, try setting a query param teachme=mock",
          };
        } else {
          setTeachmeApp(teachme);
        }

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
          platformType: getUrlParamValueByName("platform"),
          isWebApp: getUrlParamValueByName("tm-type") === tmPlatformType.Web,
          informationScreen: informationScreenData as IInformationScreenData,
        });
      } catch (err) {
        console.error(err);
        clearTimeout(timeout);
        // App.initializeWithError();
      }
    })();
  }, []);

  return (
    <HashRouter>
      <div className="app show">
        <TeachMeContext.Provider value={{ walkmeSDK, teachmeApp, tmState }}>
          <Debug />
          <Header />
          <Main />
        </TeachMeContext.Provider>
      </div>
    </HashRouter>
  );
}
