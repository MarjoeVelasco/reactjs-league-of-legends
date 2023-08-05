import React, { useState, useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchRegionDetails } from "../api/regionDetails";
import LoadingSpinner from "./LoadingSpinner";
import CardRegion from "./CardRegion";
import RegionHeader from "./RegionHeader";


function RegionDetails() {

  const [regions, setRegion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const regions = await fetchRegionDetails({ name });
        console.log(regions); 
        setRegion(regions);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    //fetch data response
    fetchData();

    // Cleanup function
    return () => {
      abortController.abort();
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return(
    <div>

        <RegionHeader name={regions.faction.name} uri={regions.faction.image.uri} overview={regions.faction.overview.short}/>

    </div>
  );
}

export default RegionDetails;