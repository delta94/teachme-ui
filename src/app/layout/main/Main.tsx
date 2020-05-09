import React, { useState, useEffect } from "react";
import InformationScreen from "../screens/information-screen/InformationScreen";
import CoursesScreen from "../screens/courses-screen/CoursesScreen";
import Header from "../header/Header";

export default function Main() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500);
  // });

  return (
    <div className="main">
      <Header />
      <CoursesScreen />
    </div>
  );
}
