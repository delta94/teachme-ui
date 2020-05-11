import React, { useState, useEffect } from "react";
import InformationScreen from "../screens/information-screen/InformationScreen";
import CoursesScreen from "../screens/courses-screen/CoursesScreen";
import Header from "../header/Header";

export default function Main({ className = "" }: { className?: string }) {
  return (
    <div className={`main ${className}`}>
      <Header />
      <CoursesScreen />
    </div>
  );
}
