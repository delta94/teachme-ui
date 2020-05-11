import React, { useEffect, useRef, useContext } from "react";

import { TeachMeContext } from "../../App";
import useViewManager from "../../hooks/useViewManager";
import Minimize from "../../components/buttons/minimize/Minimize";
import UserDetails from "../../components/user/user-details/UserDetails";
import { useLocation } from "react-router-dom";
import { ButtonType } from "../../components/buttons/Button";
import RouteButton from "../../components/buttons/route-button/RouteButton";
import { Icon } from "../../hooks/useIconManager";

export default function Header() {
  const { tmState } = useContext(TeachMeContext);
  const { pathname } = useLocation();
  const { animateCoreElements } = useViewManager();
  const logo = useRef();
  const details = useRef();
  const innerHeader = useRef();

  const { isWebApp } = tmState;
  const isHomePage = pathname === "/";
  const appTypeClass = isWebApp ? "web" : "app";
  const pageTypeClass = isHomePage ? "home-page" : "inner-page";
  const headerClass = `${appTypeClass} ${pageTypeClass}`;

  useEffect(() => {
    if (isWebApp && isHomePage) {
      animateCoreElements({
        elements: [logo.current],
        animateClassName: "fadeInDown",
        timeout: 0,
      });
      animateCoreElements({
        elements: [details.current],
        animateClassName: "fadeInDown",
        timeout: 200,
      });
    }
    if (!isHomePage) {
      animateCoreElements({
        elements: [innerHeader.current],
        animateClassName: "fadeInDown",
        timeout: 300,
      });
    }
  }, [isWebApp, isHomePage]);

  const homePageHeader = (
    <>
      <div ref={logo} className="logo topElement">
        <a href="#" draggable="true"></a>
      </div>
      <div ref={details} className="details topElement">
        <UserDetails greeting progressBar />
      </div>
    </>
  );

  const innerPageHeader = (
    <div ref={innerHeader} className="inner-header topElement">
      <RouteButton
        label="Back to Courses Menu"
        iconType={Icon.ArrowLeft}
        id="back_to_courses"
        className="back-btn"
        buttonType={ButtonType.NoBorder}
        linkTo="/"
      />
    </div>
  );

  if (isHomePage && !isWebApp) {
    return <></>;
  }

  return (
    <div className="header">
      <div className={`general-header wrapper ${headerClass}`}>
        {isHomePage && isWebApp && homePageHeader}
        {!isHomePage && innerPageHeader}
      </div>

      {isWebApp && (
        <>
          <Minimize />
        </>
      )}
    </div>
  );
}
