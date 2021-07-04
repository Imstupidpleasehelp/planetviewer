import React from "react";
import { NavLink } from "react-router-dom";

export const MiniPlanet = (props) => {
  return (
    <NavLink to={`planets/${props.name}`} >
     <div className="miniPlanet">

      

    </div></NavLink>
     
  );
};
