import React from "react";
import Tabs from "../../components/tabs/Tabs";
import ScreenInformation from "../../components/screen-information/ScreenInformation";
import Content from "../../components/content/Content";

export default function Main(props: { initiated: boolean }) {
  return (
    <>
      <Tabs />
      <ScreenInformation />
      <Content />
    </>
  );
}
