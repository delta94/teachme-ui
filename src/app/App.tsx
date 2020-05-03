import React, { useEffect, createContext, useState } from "react";
import { HashRouter } from "react-router-dom";

import walkme from "@walkme/sdk";
import {
  ISdk,
  WalkMeApp,
  ContentItem,
  LanguageItem,
} from "@walkme/sdk/dist/interfaces/sdk";

import { config } from "./config";
import { wmPlatformType, tmPlatformType } from "./consts/platform";
import Header from "./layout/header/Header";
import Main from "./layout/main/Main";

import "../styles/index.less";
import Debug from "./layout/debug/Debug";

interface IUser {
  firstName: string;
  LastName: string;
}
export interface IUserData {
  user: IUser;
  courses: {
    totalProgressBar: number;
  };
}

export const userDefaultData: IUserData = {
  user: {
    firstName: "Dan",
    LastName: "Israeli",
  },
  courses: {
    totalProgressBar: 20,
  },
};
export interface IWMState {
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

const initialState = {
  // wmSearch: {} as WalkMeApp,
  // wmNotification: {} as WalkMeApp,
  // wmUiTree: [] as ContentItem[],
  // wmLanguages: {} as LanguageItem[],
  initiated: false,
  debugError: "",
  platformType: "",
  includeLayout: false,
  tmUser: userDefaultData,
};

export const TeachMeContext = createContext({
  tmState: initialState,
  updateWMState: (updatedState: IWMState) => {},
  walkmeSDK: {} as ISdk,
});

export default function App() {
  const [walkmeSDK, setWalkmeSDK] = useState({} as ISdk);
  const [tmState, setWMState] = useState(initialState);
  const { platformType, initiated } = tmState;

  const updateWMState = (updatedState: IWMState) => {
    setWMState((prevWMState) => {
      return {
        ...prevWMState,
        updatedState,
      };
    });
  };

  const addGuidSpecificStyle = () => {
    const search = new URLSearchParams(location.search);
    const guid = search.get("guid");
    if (guid) {
      const cssSrc = `styles/${guid}/main.css`;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssSrc;

      document.body.append(link);
    }
  };

  useEffect(() => {
    if (initiated) {
      if (config.debug) displayDebugInfo();
      addGuidSpecificStyle();
      //App.onWindowReady();
    }
  }, [initiated]);

  const displayDebugInfo = () => {
    const search = new URLSearchParams(location.search);
    let guid = search.get("guid");
    if (guid === "1bcce0aee803406983e4050e0f985e6c")
      guid = `${guid} (Project Widelab)`;
    if (guid === "441591f37cad4aedafb740c52b1aab64") guid = `${guid} (Local)`;
    const host = location.host;

    setWMState((prevWMState) => {
      return {
        ...prevWMState,
        debugError: `${host}, ${
          platformType.charAt(0).toUpperCase() + platformType.slice(1)
        }, ${guid}, v${config.debug_appVersion}`,
      };
    });
  };

  useEffect(() => {
    (async () => {
      let timeout;

      try {
        await walkme.init();
        console.log("WalkMe ready =>", walkme);

        if (walkme) {
          setWalkmeSDK(walkme);
        }

        timeout = setTimeout(() => {
          throw new Error(
            `Search timeout, could not get uiTree in ${config.timeoutIfUiTreeNotFound}ms`
          );
        }, config.timeoutIfUiTreeNotFound);

        const searchParams = new URLSearchParams(location.search);
        const platform = String(searchParams.get("platform"));
        const type = String(searchParams.get("tm-type"));

        // const [
        //   languagesSDK,
        // ] = await Promise.all([
        //   walkme.content.getContentUITree(),
        //   walkme.language.getLanguagesList(),
        // ]);

        clearTimeout(timeout);
        setWMState({
          ...tmState,
          initiated: true,
          platformType: platform,
          includeLayout: type === tmPlatformType.Web,
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
      <div
        className="appWindow show"
        style={{
          marginLeft: platformType === wmPlatformType.Windows ? 10 : "",
        }}
      >
        <TeachMeContext.Provider value={{ walkmeSDK, tmState, updateWMState }}>
          <Debug />
          <Header />
          <Main />
        </TeachMeContext.Provider>
      </div>
    </HashRouter>
  );
}
