import React, { useState, useEffect } from "react";
import walkme from "@walkme/sdk";

import { config } from "../config";
import { tmPlatformType } from "../consts/platform";
import { ISdk } from "@walkme/sdk/dist/interfaces/sdk";
import { IUserData } from "../interfaces/user/user.interface";

interface IDefaultInitialState {
  initiated: boolean;
  debugError: string;
  platformType: string;
  isWebApp: boolean;
  tmUser: IUserData;
}
export default function useAppManager({
  defaultInitialTMState,
}: {
  defaultInitialTMState: IDefaultInitialState;
}) {
  const [walkmeSDK, setWalkmeSDK] = useState({} as ISdk);
  const [initialTmState, setInitialTMState] = useState(defaultInitialTMState);

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
        setInitialTMState({
          ...defaultInitialTMState,
          initiated: true,
          platformType: platform,
          isWebApp: type === tmPlatformType.Web,
        });
      } catch (err) {
        console.error(err);
        clearTimeout(timeout);
        // App.initializeWithError();
      }
    })();
  }, []);
  return {
    walkmeSDK,
    initialTmState,
  };
}
