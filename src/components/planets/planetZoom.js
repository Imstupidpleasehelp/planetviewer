import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
export const PlanetZoom = (props) => {
  return (
    <div className="container">
     
          <div className="">
            <div className="planet">
              <div className="wrap">
                <div className={props.background}></div>
                <div className="clouds"></div>
              </div>
            </div>
            
          </div>
        
      </div>
      
   
  );
};
