import './stars.scss'

import { NavLink } from "react-router-dom";
export const Star = (props) => {
    return (
        <NavLink to={props.name}>
        <div className={`starPreview ${props.starType}`}>
<h1>{props.name}</h1>
<h3>{props.starType}</h3>


        </div></NavLink>
    )
}


