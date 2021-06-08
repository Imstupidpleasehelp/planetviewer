import React from "react";

import { NavLink } from "react-router-dom";
export const Bar = (props) => {
  return (
    <div className="container-fluid navMaster">
      <div className="row">
        <div className="col">
          {" "}
          <NavLink to="/interstellar" className="navButton" onClick={() => props.click.play()}>
            Interstellar Space
          </NavLink>
        </div>
        <div className="col-lg-4 bar ">{props.BarText}</div>
        <div className="col">
          {" "}
          
        </div>
      </div>
    </div>
  );
};
