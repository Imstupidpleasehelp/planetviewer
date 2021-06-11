import './stars.css'

import { NavLink } from "react-router-dom";
export const Star = (props) => {
    return (
        <NavLink to={props.name}>
        <div className={`starWrapper`}>


<div className={`starBall ${props.starType}`}>
<h1 className="star-label">{props.name}</h1>
</div>

        </div></NavLink>
    )
}


