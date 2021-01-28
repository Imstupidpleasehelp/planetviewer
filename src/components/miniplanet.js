import React from "react";
import { NavLink } from "react-router-dom";

export const MiniPlanet = (props) => {
  return (
    <NavLink to={props.name}>
      <div className={`miniPlanet ${props.className}`}></div>

     
    </NavLink>
  );
};
