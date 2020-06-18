import React, { useEffect } from "react";

// teachme provider
import TeachmeProvider from "./providers/TeachmeProvider";

// layout component
import Layout from "./components/layout";

// styles
import "./app.less";
import { config } from "./constants/config";
import useAppManager from "./hooks/useAppManager";

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
