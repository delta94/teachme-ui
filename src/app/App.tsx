import React, { useEffect, createContext, useState } from "react";
import { HashRouter } from "react-router-dom";

import { ISdk } from "@walkme/sdk/dist/interfaces/sdk";

import { config } from "./config";
import { wmPlatformType } from "./consts/platform";
import Debug from "./layout/debug/Debug";
import Header from "./layout/header/Header";
import Main from "./layout/main/Main";

import "../styles/index.less";
import { IUserData } from "./interfaces/user/user.interface";
import { ITMState } from "./interfaces/tm-state/tmState.interface";
import useAppManager from "./hooks/useAppManager";

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
  // wmSearch: {} as WalkMeApp,
  // wmNotification: {} as WalkMeApp,
  // wmUiTree: [] as ContentItem[],
  // wmLanguages: {} as LanguageItem[],
  initiated: false,
  debugError: "",
  platformType: "",
  isWebApp: false,
  tmUser: defaultUserData,
};

export const TeachMeContext = createContext({
  tmState: defaultInitialTMState,
  updateTMState: (updatedState: ITMState) => {},
  walkmeSDK: {} as ISdk,
});

export default function App() {
  const { walkmeSDK, initialTmState } = useAppManager({
    defaultInitialTMState,
  });
  const [tmState, setTMState] = useState(initialTmState);
  const { platformType, initiated } = tmState;

  /**
   * updateTMState
   * context callback to update state
   * @param updatedState
   */
  const updateTMState = (updatedState: ITMState) => {
    setTMState((prevTMState) => {
      return {
        ...prevTMState,
        updatedState,
      };
    });
  };

  /**
   * addGuidSpecificStyle
   * Adding custom styles by guid
   */
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

  /**
   * displayDebugInfo
   */
  const displayDebugInfo = () => {
    const search = new URLSearchParams(location.search);
    let guid = search.get("guid");
    if (guid === "1bcce0aee803406983e4050e0f985e6c")
      guid = `${guid} (Project Widelab)`;
    if (guid === "441591f37cad4aedafb740c52b1aab64") guid = `${guid} (Local)`;
    const host = location.host;

    setTMState((prevTMState) => {
      return {
        ...prevTMState,
        debugError: `${host}, ${
          platformType.charAt(0).toUpperCase() + platformType.slice(1)
        }, ${guid}, v${config.debug_appVersion}`,
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

  return (
    <HashRouter>
      <div
        className="appWindow show"
        style={{
          marginLeft: platformType === wmPlatformType.Windows ? 10 : "",
        }}
      >
        <TeachMeContext.Provider value={{ walkmeSDK, tmState, updateTMState }}>
          <Debug />
          <Header />
          <Main />
        </TeachMeContext.Provider>
      </div>
    </HashRouter>
  );
}
