import React from "react";
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
