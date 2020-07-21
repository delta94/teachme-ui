import React, { useContext } from "react";
import cc from "classcat";
import { useLocation } from "react-router-dom";

// context
import { TeachMeContext } from "../../../providers/TeachmeProvider";

// components
import HeaderHomePage from "./HeaderHomePage";
import HeaderInnerPage from "./HeaderInnerPage";

// styles
import "./styles.less";

/**
 * Header component has 2 versions according to isWebApp & isHomepage:
 * HeaderHomePage
 * HeaderInnerPage
 */
export default function Header() {
	const {
		appState: {
			tmState: { isWebApp },
		},
	} = useContext(TeachMeContext);
	const { pathname } = useLocation();
	const isHomePage = pathname === "/";

	if (isHomePage && !isWebApp) {
		return <></>;
	}

	return (
		<div className="header">
			<div
				className={cc([
					"general-header wrapper",
					{
						"home-page": isHomePage,
						"inner-page": !isHomePage,
						web: isWebApp,
						app: !isWebApp,
					},
				])}
			>
				{isHomePage && isWebApp && <HeaderHomePage />}
				{!isHomePage && <HeaderInnerPage />}
			</div>
		</div>
	);
}
