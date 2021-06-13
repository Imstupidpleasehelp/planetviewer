import './stars.css'

import { NavLink } from "react-router-dom";
export const Star = (props) => {
    return (
        <NavLink to={props.name}>
        <h1 className="star-label">{props.name}</h1><div className={``}>


<div className={`starBall ${props.starType}`}>

</div>

        </div></NavLink>
    )
}


