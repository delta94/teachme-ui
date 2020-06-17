import React, { useEffect, useRef, useContext } from "react";
import { useLocation, Link } from "react-router-dom";

// context
import { TeachMeContext } from "../../../providers/TeachmeProvider";

// hooks
import useViewManager from "../../../hooks/useViewManager";

// components
import UserDetails from "../../common/user-details";

// styles
import "./index.less";

export default function HeaderHomePage() {
  const {
    appState: {
      tmState: { isWebApp },
    },
  } = useContext(TeachMeContext);
  const { animateCoreElements } = useViewManager();

  const logo = useRef<HTMLDivElement>(null);
  const details = useRef<HTMLDivElement>(null);

  // Using useEffect animate header's elements
  useEffect(() => {
    animateCoreElements({
      elements: [logo.current, details.current],
      animateClassName: "fadeInDown",
      timeout: 0,
    });
  }, []);

  return (
    <>
      <div ref={logo} className="logo topElement">
        <Link to="/" />
      </div>
      <div ref={details} className="details topElement">
        <UserDetails greeting progressBar />
      </div>
    </>
  );
}
