import React from "react";
import SideBar from "./SideBar";
import MainSection from "./MainSection";

export default function MainProject() {
  return (
    <div className="flex justify-between">
      <div
        className="left  h-full bg-blue-200 w-auto relative"
      >
        <SideBar />
      </div>
      <div className="right grow bg-green-300 p-16">
        <MainSection />
      </div>
    </div>
  );
}
