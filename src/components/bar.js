import React from "react";

import { NavLink } from "react-router-dom";
export const Bar = (props) => {
  return (
    <div className="container-fluid navMaster">
      <div className="row">
        <div className="col">
          {" "}
          <NavLink to="/" className="navButton" onClick={() => props.click.play()}>
            Interstellar Space
          </NavLink>
        </div>
        <div className="col-lg-4 bar ">{props.BarText}</div>
        <div className="col">
          {" "}
          <NavLink to="/" className="navButton2" onClick={() => props.error.play()} onMouseOver={() => props.setBar("Error: Insufficient fuel")}
        onMouseLeave={() => props.setBar(`...`)}>
            Galatic View
          </NavLink>
        </div>
      </div>
    </div>
  );
};
