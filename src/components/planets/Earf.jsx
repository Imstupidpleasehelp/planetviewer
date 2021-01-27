import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
export const Earth = () => {
  return (
    <div className="planetWrapper container-fluid">
      <PlanetView Name="Earth" Population="Many" />
      <div className="planet">
        <div className="wrap">
          <div className="background"></div>
          <div className="clouds"></div>
        </div>
        <div className="mask"></div>
      </div>
      <NavLink to="/"><div className="back">Back</div></NavLink>
    </div>
  );
};
