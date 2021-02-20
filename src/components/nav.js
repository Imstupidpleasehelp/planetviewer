import React from 'react'
import { NavLink } from "react-router-dom";



export const Nav = () => {
    return(
    <div className="navMaster">
        <NavLink to="/" className="systemButton">System View</NavLink>
    </div>
    )
}