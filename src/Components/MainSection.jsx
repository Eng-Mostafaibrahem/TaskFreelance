import { useEffect, useState } from "react";
import Card from "./Card";
import HeaderMainSection from "./HeaderMainSection";

export default function MainSection({ title,data }) {
 

  return (
    <div className="mt-5  ">
      <HeaderMainSection>{title}</HeaderMainSection>
      <div className="flex flex-wrap justify-center items-center w-full ">
        <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1  gap-y-4 gap-x-2 justify-around w-full  mx-auto">
          <Card data={data} />
        </div>
      </div>
    </div>
  );
}
