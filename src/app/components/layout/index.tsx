import React, { useEffect, useState, useContext } from "react";
import { HashRouter } from "react-router-dom";

import { TeachMeContext } from "../../providers/TeachmeProvider";
import useWindowResize from "../../hooks/useWindowResize";
import { config } from "../../constants/config";
import InformationScreen from "./screens/information-screen";
import Debug from "./debug";
import Minimize from "../common/buttons/minimize";
import Sidebar from "./sidebar";
import Main from "./main";

export default function Layout() {
  const teachMeContext = useContext(TeachMeContext);

  const {
    appState: {
      tmState: { isWebApp },
    },
    infoScreen: { informationScreen },
    sidebar: { isOpen, setIsOpen },
  } = teachMeContext;

  const { windowWidth, windowHeight } = useWindowResize();
  const { appWrapperWidth, desktopBreakPoint, webAppHeight } = config;
  const [globalCssProperties, setGlobalCssProperties] = useState({});
  const sidebarClass = isOpen ? "sidebar-open" : "sidebar-close";

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
      isWebApp && isOpen && windowWidth < appWrapperWidth;
    if (shouldCloseSidebar) {
      setIsOpen(false);
    }
  }, [windowWidth, windowHeight]);

  return (
    <div
      className={`app show wrapper`}
      style={globalCssProperties as React.CSSProperties}
    >
      {informationScreen ? (
        <InformationScreen {...informationScreen} isWebApp={isWebApp} />
      ) : (
        <HashRouter>
          <Debug />
          {isWebApp && <Minimize />}
          <Sidebar />
          <Main className={sidebarClass} />
        </HashRouter>
      )}
    </div>
  );
}
