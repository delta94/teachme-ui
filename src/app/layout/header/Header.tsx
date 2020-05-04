import React, { useEffect, useRef, useContext } from "react";
import useViewManager from "../../hooks/useViewManager";
import { TeachMeContext } from "../../App";
import Minimize from "../../components/buttons/minimize/Minimize";
import UserDetails from "../../components/user/user-details/UserDetails";
import { useLocation, Link } from "react-router-dom";
import Button, { ButtonType } from "../../components/buttons/Button";
import RouteButton from "../../components/buttons/route-button/RouteButton";
import { Icon } from "../../hooks/useIconManager";

export default function Header() {
  const tmContext = useContext(TeachMeContext);
  const { isWebApp } = tmContext.tmState;
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const headerClass = `${isWebApp ? "web" : "app"} ${
    isHomePage ? "home-page" : "inner-page"
  } `;
  const logo = useRef();
  const details = useRef();

  const { animateCoreElements } = useViewManager();

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

  const backButton = (
    <RouteButton
      label="Back to Courses Menu"
      iconType={Icon.ArrowLeft}
      id="back_to_courses"
      className="back-btn"
      buttonType={ButtonType.NoBorder}
      linkTo="/"
    />
  );

  return (
    <div className="header">
      <div className="wrapper">
        <div className={`general-header ${headerClass}`}>
          {isHomePage && isWebApp && homePageHeader}
          {!isHomePage && backButton}
        </div>
      </div>

      {isWebApp && (
        <div className="minimize">
          <Minimize />
        </div>
      )}
    </div>
  );
}
