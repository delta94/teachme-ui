import React, { useEffect } from "react";

import TeachmeProvider from "./providers/TeachmeProvider";
import { config } from "./constants/config";
import useAppManager from "./hooks/useAppManager";
import Layout from "./components/layout";

// styles
import "./styles.less";

export default function App() {
	const { addGuidSpecificStyle } = useAppManager();

	useEffect(() => {
		if (config.supportThemeStyles) addGuidSpecificStyle();
	}, []);

	return (
		<TeachmeProvider>
			<Layout />
		</TeachmeProvider>
	);
}
