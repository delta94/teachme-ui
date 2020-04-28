import React, { useEffect, createContext, useState } from "react";
import walkme from "@walkme/sdk";
import {
  ISdk,
  WalkMeApp,
  ContentItem,
  LanguageItem,
} from "@walkme/sdk/dist/interfaces/sdk";

import { config } from "./config";
import { wmPlatformType } from "./consts/platform";
import Top from "./layout/top/Top";
import Main from "./layout/main/Main";

import "../styles/index.less";

export interface IWMState {
  wmSearch: WalkMeApp;
  wmNotification: WalkMeApp;
  wmUiTree: ContentItem[];
  wmLanguages: LanguageItem[];
  debugError: string;
  platformType: string;
}

const initialState = {
  wmSearch: {} as WalkMeApp,
  wmNotification: {} as WalkMeApp,
  wmUiTree: [] as ContentItem[],
  wmLanguages: {} as LanguageItem[],
  debugError: "",
  platformType: "",
};

export const WalkMeContext = createContext({
  wmState: initialState,
  updateWMState: (updatedState: IWMState) => {},
  walkmeSDK: {} as ISdk,
});

export default function App() {
  const [walkmeSDK, setWalkmeSDK] = useState({} as ISdk);
  const [init, setInit] = useState(false);
  const [wmState, setWMState] = useState(initialState);
  const { debugError, platformType } = wmState;

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
    if (init) {
      if (config.debug) displayDebugInfo();
      addGuidSpecificStyle();
      //App.onWindowReady();
    }
  }, [init]);

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
        console.log("WalkMe ready");

        await walkme.init();
        console.log("walkme =>", walkme);

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

        const [
          search,
          notifications,
          uiTreeSDK,
          languagesSDK,
        ] = await Promise.all([
          walkme.apps.getApp("search"),
          walkme.apps.getApp("notifications"),
          walkme.content.getContentUITree(),
          walkme.language.getLanguagesList(),
        ]);

        setWMState({
          ...wmState,
          wmSearch: search,
          wmNotification: notifications,
          wmUiTree: uiTreeSDK,
          wmLanguages: languagesSDK,
          platformType: platform,
        });

        if (!uiTreeSDK.length || !languagesSDK)
          throw new Error("Some content couldn't be loaded");

        clearTimeout(timeout);
        setInit(true);
      } catch (err) {
        console.error(err);
        clearTimeout(timeout);
        // App.initializeWithError();
      }
    })();
  }, []);

  return (
    <div
      className="appWindow show"
      style={{
        marginLeft: wmState.platformType === wmPlatformType.Windows ? 10 : "",
      }}
    >
      {Boolean(debugError) && (
        <div
          className="debug"
          style={{
            position: "absolute",
          }}
        >
          <span>{debugError}</span>
        </div>
      )}
      <WalkMeContext.Provider value={{ walkmeSDK, wmState, updateWMState }}>
        <Top initiated={init} />
        <Main initiated={init} />
      </WalkMeContext.Provider>
    </div>
  );
}
