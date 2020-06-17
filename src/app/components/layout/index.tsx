import React, { useEffect, useState, useContext } from "react";
import cc from "classcat";
import { HashRouter } from "react-router-dom";

// context
import { TeachMeContext } from "../../providers/TeachmeProvider";

// hooks
import useWindowResize from "../../hooks/useWindowResize";

// constants
import { config } from "../../constants/config";

// components
import InformationScreen from "./screens/information-screen";
import Debug from "./debug";
import Minimize from "../common/buttons/minimize";
import Sidebar from "./sidebar";
import Main from "./main";

export default function Layout() {
  const { appWrapperWidth, desktopBreakPoint, webAppHeight } = config;
  const teachMeContext = useContext(TeachMeContext);
  const {
    appState: {
      tmState: { isWebApp },
    },
    infoScreen: { informationScreen },
    sidebar: { sidebarIsOpen, setSidebarIsOpen },
  } = teachMeContext;

  const { windowWidth, windowHeight } = useWindowResize();
  const [globalCssProperties, setGlobalCssProperties] = useState({});
  const sidebarClasses = {
    "sidebar-open": sidebarIsOpen,
    "sidebar-close": !sidebarIsOpen,
  };

  /**
   * Set css variables properties && sidebar
   * according to windowWidth / windowHeight
   */
  useEffect(() => {
    // window's width smallest than desktopBreakPoint window's,
    // and window height greater than webAppHeight (config property)
    const shouldUpdateCssProperties =
      windowWidth <= desktopBreakPoint && windowHeight > webAppHeight;

    if (shouldUpdateCssProperties) {
      setGlobalCssProperties({ "--webAppHeight": `${windowHeight}px` });
    } else {
      setGlobalCssProperties({});
    }

    // if sidebar is open and window width than appWrapperWidth (config property)
    const shouldCloseSidebar =
      isWebApp && sidebarIsOpen && windowWidth < appWrapperWidth;
    if (shouldCloseSidebar) {
      setSidebarIsOpen(false);
    }
  }, [windowWidth, windowHeight]);

  return (
    <div
      className="app wrapper"
      style={globalCssProperties as React.CSSProperties}
    >
      {informationScreen ? (
        <InformationScreen {...informationScreen} isWebApp={isWebApp} />
      ) : (
        <HashRouter>
          <Debug />
          {isWebApp && <Minimize />}
          <Sidebar />
          <Main className={cc(["toggle-sidebar", sidebarClasses])} />
        </HashRouter>
      )}
    </div>
  );
}
