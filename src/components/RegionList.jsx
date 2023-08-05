import React, { useState, useEffect, useMemo } from "react";
import { fetchRegion } from "../api/regions";
import LoadingSpinner from "./LoadingSpinner";
import CardRegion from "./CardRegion";

function RegionList() {
  const factionsData = fetchRegion();


  return(
    <div className="w-full bg-[url('../src/images/ionia-03.jpg')] bg-no-repeat bg-fixed bg-center bg-cover ">
      <div className="max-w-screen-lg m-auto pt-20 grid grid-cols-2 gap-4 p-4">
        {factionsData.factions.map((faction, index) => (
          <CardRegion key={index} name={faction.name} uri={faction.image.uri} slug={faction.slug}/>
        ))}
      </div>
    </div>
  );

}

export default RegionList;