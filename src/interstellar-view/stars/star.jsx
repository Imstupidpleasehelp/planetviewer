import "./stars.css";

import { NavLink } from "react-router-dom";
export const Star = (props) => {
  return (
    <NavLink to={`/${props.name}?starType=${props.starType}`}>
      
      <div className={``}>
        <div className={`starBall ${props.starType}`}><p className={`star-label`}>{props.name}</p></div>
      </div>
    </NavLink>
  );
};
