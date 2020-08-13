import React, { useEffect, useRef, useContext } from "react";

// interfaces
import { ButtonType } from "../../common/button/interface";

// constants
import localization from "../../../constants/localization";

// hooks
import useViewManager from "../../../hooks/useViewManager";
import { Icon } from "../../../hooks/useIconManager";

// components
import RouteButton from "../../common/button/route-button";

// styles
import "./styles.less";
import { useLocation } from "react-router-dom";
import { TeachMeContext } from "../../../providers/TeachmeProvider";

export default function HeaderInnerPage() {
	const {
		header: { backToCoursesLabel },
	} = localization;
	const location = useLocation();
	const teachMeContext = useContext(TeachMeContext);
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

	const handleBackFromQuiz = ()=>{
		if (/\/quiz\/\d+$/.test(location.pathname)){
			teachMeContext.updateContent();
		}
	}

	return (
		<div ref={innerHeader} className="inner-header topElement">
			<RouteButton
				label={backToCoursesLabel}
				iconType={Icon.BackArrow}
				id="back_to_courses"
				className="back-btn"
				buttonType={ButtonType.NoBorder}
				linkTo="/"
				onClick={handleBackFromQuiz}
			/>
		</div>
	);
}
