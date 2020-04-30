import React, { useState, useEffect } from "react";
import InformationScreen from "../screens/information-screen/InformationScreen";
import CoursesScreen from "../screens/courses-screen/CoursesScreen";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });
  return (
    <div className="main">
      {/* TODO: improve InformationScreen component */}
      {isLoading ? <InformationScreen /> : <CoursesScreen />}
    </div>
  );
}
