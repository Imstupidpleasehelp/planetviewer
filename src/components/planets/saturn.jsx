import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
export const Saturn = () => {
  return (
    <div className="planetWrapper container">
      <div className="row">
        <div className="col-sm-4">
          <PlanetView Name="Saturn" Population="Many" temperture="-178°C" /></div>
         <div class="col-sm-8">
        <PlanetZoom background="Saturn" /></div>
      </div>
      <NavLink to="/sol">
        <div className="back">Back</div>
      </NavLink>
    </div>
  );
};