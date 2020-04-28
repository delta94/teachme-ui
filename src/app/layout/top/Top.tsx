import React, { useEffect, useRef } from "react";
import useViewManager from "../../hooks/useViewManager";

export default function Top(props: { initiated: boolean }) {
  const logo = useRef();
  const options = useRef();
  const minimize = useRef();

  const { animateCoreElements } = useViewManager();

  useEffect(() => {
    animateCoreElements({
      elements: [logo.current],
      animateClassName: "fadeInDown",
      timeout: 0,
    });
    animateCoreElements({
      elements: [options.current, minimize.current],
      animateClassName: "fadeInDown",
      timeout: 200,
    });
  }, []);

  return (
    <div className="top">
      <div className="wrapper">
        <div ref={logo} className="logo topElement">
          <a href="#" draggable="true"></a>
        </div>

        <div className="search topElement fadeInDown">
          <input
            id="searchInput"
            className="searchInput"
            type="text"
            placeholder="Search"
          />
          <div className="searchIcon">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 20.2 19.4"
            >
              <path
                className="st0"
                d="M9.2,1.8c-3.8,0-6.9,3.1-6.9,6.9s3.1,6.9,6.9,6.9s6.9-3.1,6.9-6.9S13.1,1.8,9.2,1.8"
              />
              <path className="st1" d="M14.1,13.7l3.8,3.8" />
            </svg>
          </div>
        </div>

        <div ref={options} className="options">
          <div className="notifications topElement fadeInDown">
            <a>
              <div className="circle"></div>
              <span className="notificationDot"></span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 20.2 19.4"
              >
                <path
                  className="st0"
                  d="M10.2,1c-2.1,0-1.9,2-1.9,2S5.1,4,5.1,8.4c0,0,0.4,2.5-3.1,4.7c-0.2,0.1-0.3,0.4-0.3,0.6V15
                c0,0.4,0.3,0.8,0.8,0.8h15.4c0.4,0,0.8-0.3,0.8-0.8v-1.3c0-0.3-0.1-0.5-0.3-0.6c-0.9-0.6-3.1-2.3-3-4.7c-0.4-3.3-1.1-4-3.3-5.3
                C12,3.1,12.2,1,10.2,1z"
                />
                <path
                  className="st0"
                  d="M6.3,16c0,1.1,1.7,2,3.8,2s3.8-0.9,3.8-2"
                />
              </svg>
            </a>
          </div>

          <div className="preferences topElement fadeInDown">
            <a className="preferences-icon">
              <div className="circle"></div>
              <svg
                viewBox="0 0 16 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z" />
                <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" />
                <path d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z" />
              </svg>
            </a>
            <div className="dropdown">
              <div className="collapsable">
                <div className="header collapsed">
                  <div className="refIcon">
                    <i className="fas fa-globe-americas"></i>
                  </div>
                  <span className="title">Language</span>
                </div>
                <ul className="languages">
                  <li data-language="english">
                    <a className="active">English</a>
                  </li>
                  <li data-language="polish">
                    <a>Polish</a>
                  </li>
                </ul>
              </div>
              <hr />
              <a className="header-action">
                <div className="header refresh">
                  <div className="refIcon">
                    <i className="fas fa-redo-alt"></i>
                  </div>
                  <span className="title">Refresh</span>
                </div>
              </a>
              <a className="header-action">
                <div className="header logout">
                  <div className="refIcon">
                    <i className="fas fa-sign-out-alt"></i>
                  </div>
                  <span className="title">Logout</span>
                </div>
              </a>
            </div>
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
    </div>
  );
}
