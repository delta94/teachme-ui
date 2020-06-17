import React from "react";

// teachme provider
import TeachmeProvider from "./providers/TeachmeProvider";

// layout component
import Layout from "./components/layout";

// styles
import "./app.less";

export default function App() {
  return (
    <TeachmeProvider>
      <Layout />
    </TeachmeProvider>
  );
}
