import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
export const Earth = () => {
  return (
    <div className="planetWrapper container">
      <div className="row">
        <div className="col-sm-4">
          <PlanetView Name="Earth" Population="Many" /></div>
          <div className="col-sm-8">
            <div className="planet">
              <div className="wrap">
                <div className="background"></div>
                <div className="clouds"></div>
              </div>
            </div>
            
          </div>
        
      </div>
      <NavLink to="/">
        <div className="back">Back</div>
      </NavLink>
    </div>
  );
};
