import React, { useEffect, useRef, useContext } from "react";
import useViewManager from "../../hooks/useViewManager";
import { TeachMeContext } from "../../App";
import Minimize from "../../components/buttons/minimize/Minimize";
import { ProgressBar } from "../../components/progress-bar/ProgressBar";
interface IUser {
  firstName: string;
  LastName: string;
}
interface IData {
  user: IUser;
  progressBar: number;
}

const defaultData: IData = {
  user: {
    firstName: "Dan",
    LastName: "Israeli",
  },
  progressBar: 20,
};

export default function Header() {
  const { user, progressBar } = defaultData;
  const tmContext = useContext(TeachMeContext);
  const { includeLayout } = tmContext.tmState;
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
            <h2 className="greeting">Welcome Back, {user.firstName}</h2>
            <ProgressBar percentCompletion={progressBar} showTitle />
          </div>
        </div>
      </div>
      <div ref={minimize} className="minimize topElement">
        <Minimize />
      </div>
    </div>
  );
}
