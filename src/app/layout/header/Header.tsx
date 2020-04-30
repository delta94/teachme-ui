import React, { useEffect, useRef, useContext } from "react";
import useViewManager from "../../hooks/useViewManager";
import { TeachMeContext } from "../../App";
import Minimize from "../../components/buttons/minimize/Minimize";
import UserDetails from "../../components/user/user-details/UserDetails";

export default function Header() {
  const tmContext = useContext(TeachMeContext);
  const { includeLayout, tmUser } = tmContext.tmState;
  const logo = useRef();
  const details = useRef();
  const minimize = useRef();

  const { animateCoreElements } = useViewManager();

  useEffect(() => {
    if (includeLayout) {
      animateCoreElements({
        elements: [logo.current],
        animateClassName: "fadeInDown",
        timeout: 0,
      });
      animateCoreElements({
        elements: [minimize.current, details.current],
        animateClassName: "fadeInDown",
        timeout: 200,
      });
    }
  }, [includeLayout]);

  if (!includeLayout) {
    return null;
  }

  return (
    <div className="header">
      <div className="wrapper">
        <div className="general-header">
          <div ref={logo} className="logo topElement">
            <a href="#" draggable="true"></a>
          </div>
          <div ref={details} className="details topElement">
            <UserDetails greeting progressBar />
          </div>
        </div>
      </div>
      <div ref={minimize} className="minimize topElement">
        <Minimize />
      </div>
    </div>
  );
}
