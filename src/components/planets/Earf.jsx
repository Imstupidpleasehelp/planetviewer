import React from "react";
import { PlanetView } from "../planetview";

export const Earth = () => {
  return (
    <div className="planetWrapper">
      <PlanetView Name="Earth" Population="Many" />
      <div className="planet">
        <div className="wrap">
          <div className="background"></div>
          <div className="clouds"></div>
        </div>
        <div className="mask"></div>
      </div>
    </div>
  );
};
