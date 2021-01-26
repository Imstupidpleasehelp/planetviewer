import React from 'react'



export const PlanetView = (props) => {
return( 
    <div className="planetView">
{props.Name} {props.Population}
    </div>
)
}