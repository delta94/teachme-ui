import React, { useEffect, useRef, useContext } from "react";
import cc from "classcat";
import { useLocation, Link } from "react-router-dom";

// context
import { TeachMeContext } from "../../../providers/TeachmeProvider";

// constants
import localization from "../../../constants/localization";

// hooks
import useViewManager from "../../../hooks/useViewManager";
import { Icon } from "../../../hooks/useIconManager";

// components
import { ButtonType } from "../../common/buttons";
import UserDetails from "../../common/user-details";
import RouteButton from "../../common/buttons/route-button";

// styles
import "./index.less";

export default function HeaderInnerPage() {
  const {
    header: { backToCoursesLabel },
  } = localization;

  const { animateCoreElements } = useViewManager();
  const innerHeader = useRef<HTMLDivElement>(null);

  // Using useEffect animate header's elements
  useEffect(() => {
    animateCoreElements({
      elements: [innerHeader.current],
      animateClassName: "fadeInDown",
      timeout: 300,
    });
  }, []);

  return (
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
}
