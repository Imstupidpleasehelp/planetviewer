import React from "react";

import { NavLink } from "react-router-dom";
export const Bar = (props) => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-sm-4">
          {" "}
          <NavLink to="/" className="navButton">
            Interstellar Space
          </NavLink>
        </div>
        <div className="col-sm-4 bar ">{props.BarText}</div>
        <div className="col-sm-4">
          {" "}
          <NavLink to="/sol" className="navButton">
            Galatic View
          </NavLink>
        </div>
      </div>
    </div>
  );
};
