import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../pages/Welcome";
import NotFound from "../pages/NotFound";
import ChampionDetails from "./ChampionDetails";
import RegionList from "./RegionList";
import RegionDetails from "./RegionDetails";

function RouterProvider(){

  return (
        <Routes>
          <Route index element={<Welcome/>}></Route>
          <Route path="/champions" element={<Welcome/>}></Route>
          <Route path="/champions/:name" element={<ChampionDetails/>}></Route>
          <Route path="/regions" element={<RegionList/>}></Route>
          <Route path="/regions/:name" element={<RegionDetails/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
  );
}

export default RouterProvider;