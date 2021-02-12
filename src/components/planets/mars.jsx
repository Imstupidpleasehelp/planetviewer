import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
export const Mars = () => {
  return (
    <div className="planetWrapper container">
      <div className="row">
        <div className="col-sm-4">
          <PlanetView Name="Mars" Population="1, (Elon musk)" temperture="-80°C" /></div>
         <div class="col-sm-8">
        <PlanetZoom background="mars"></PlanetZoom></div>
      </div>
      <NavLink to="/sol">
        <div className="back">Back</div>
      </NavLink>
    </div>
  );
};
