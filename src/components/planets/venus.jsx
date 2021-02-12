import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
export const Venus = () => {
  return (
    <div className="planetWrapper container">
      <div className="row">
        <div className="col-sm-4">
          <PlanetView Name="Venus" Population="0" temperture="467°C" /></div>
         <div class="col-sm-8">
        <PlanetZoom background="venus"></PlanetZoom></div>
      </div>
      <NavLink to="/sol">
        <div className="back">Back</div>
      </NavLink>
    </div>
  );
};
