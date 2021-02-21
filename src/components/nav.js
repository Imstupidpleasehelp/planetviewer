import React from "react";
import { NavLink } from "react-router-dom";
import { Bar } from "./bar";

export const Nav = () => {
  return (
    <div className="navMaster">
      <div className="row">
        <div className=" col-sm-4">
          <NavLink to="/" className="navButton">
            Interstellar Space
          </NavLink>
        </div>
        <div className="col-sm-4">

        </div>
        <div className=" col-sm-4">
          <NavLink to="/sol" className="navButton">
            System View
          </NavLink>
        </div>
      </div>
      
    </div>
  );
};
