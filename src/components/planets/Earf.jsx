import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
export const Earth = () => {
  return (
    <div className="planetWrapper container">
      <div className="row">
        <div className="col-sm-4">
          <PlanetView Name="Earth" Population="7,878,904,012 (estimate)" temperture="1.02 °C" /></div>
         <div class="col-sm-8">
        <PlanetZoom background="background" /></div>
      </div>
      <NavLink to="/">
        <div className="back">Back</div>
      </NavLink>
    </div>
  );
};
