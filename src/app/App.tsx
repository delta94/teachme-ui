import React from "react";

// styles
import TeachmeProvider, { TeachMeContext } from "./providers/TeachmeProvider";
import Layout from "./components/layout";

import "./app.less";

export default function App() {
  return (
    <TeachmeProvider>
      <Layout />
    </TeachmeProvider>
  );
}
