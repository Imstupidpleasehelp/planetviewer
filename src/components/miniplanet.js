import React from "react";
import { NavLink } from "react-router-dom";

export const MiniPlanet = (props) => {
  return (
    <div className="miniPlanet">
     
<NavLink to={`planets/${props.name}`} >
      <div className={`${props.className}`}></div>
</NavLink>
     
    </div>
  );
};
