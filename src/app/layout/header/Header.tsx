import React, { useEffect, useRef, useContext } from "react";
import useViewManager from "../../hooks/useViewManager";
import { TeachMeContext } from "../../App";

export default function Header() {
  const tmContext = useContext(TeachMeContext);
  const { includeLayout } = tmContext.tmState;
  const logo = useRef();
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
        elements: [minimize.current],
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
        <div ref={logo} className="logo topElement">
          <a href="#" draggable="true"></a>
        </div>
        <div ref={minimize} className="minimize topElement">
          <a>
            <div className="circle"></div>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 20.2 19.4"
            >
              <g id="right">
                <polygon className="st0" points="11,1.8 18.2,9.1 11,9.2" />
                <path className="st1" d="M13,6.9l5.2-5.1" />
              </g>
              <g id="left">
                <polygon className="st0" points="9.3,10.7 2,10.8 9.3,18" />
                <path className="st1" d="M7.1,12.9l-5,5.1" />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
