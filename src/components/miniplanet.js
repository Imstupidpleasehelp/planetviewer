import React from "react";
import { NavLink } from "react-router-dom";

export const MiniPlanet = (props) => {
  return (
    <div>
<NavLink to={props.name} className="miniPlanet">
      <div className={`miniPlanet ${props.className}`}></div>
</NavLink>
     
    </div>
  );
};
