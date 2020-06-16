import React, { useEffect, useRef, useContext } from "react";
import { useLocation, Link } from "react-router-dom";

// context & localization
import { TeachMeContext } from "../../../providers/TeachmeProvider";
import localization from "../../../constants/localization";

// components
import { ButtonType } from "../../common/buttons";
import UserDetails from "../../common/user-details";
import RouteButton from "../../common/buttons/route-button";

// hooks
import useViewManager from "../../../hooks/useViewManager";
import { Icon } from "../../../hooks/useIconManager";

// styles
import "./index.less";

export default function Header() {
  const {
    appState: { tmState },
  } = useContext(TeachMeContext);
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
  const {
    header: { backToCoursesLabel },
  } = localization;

  useEffect(() => {
    if (isWebApp && isHomePage) {
      animateCoreElements({
        elements: [logo.current, details.current],
        animateClassName: "fadeInDown",
        timeout: 0,
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
        <Link to="/" />
      </div>
      <div ref={details} className="details topElement">
        <UserDetails greeting progressBar />
      </div>
    </>
  );

  const innerPageHeader = (
    <div ref={innerHeader} className="inner-header topElement">
      <RouteButton
        label={backToCoursesLabel}
        iconType={Icon.BackArrow}
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
    <>
      <div className="header">
        <div className={`general-header wrapper ${headerClass}`}>
          {isHomePage && isWebApp && homePageHeader}
          {!isHomePage && innerPageHeader}
        </div>
      </div>
    </>
  );
}
