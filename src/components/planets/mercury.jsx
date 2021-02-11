import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
export const Mercury = () => {
  return (
    <div className="planetWrapper container">
      <div className="row">
        <div className="col-sm-4">
          <PlanetView Name="Mercury" Population="0" temperture="477°C" /></div>
         <div class="col-sm-8">
       <PlanetZoom background="mercury"></PlanetZoom></div>
      </div>
      <NavLink to="/">
        <div className="back">Back</div>
      </NavLink>
    </div>
  );
};
