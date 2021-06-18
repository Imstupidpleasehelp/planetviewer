import React from 'react'



export const PlanetView = (props) => {
return( 
    <div className="planetView">
Planet type: {props.type} <br />Name: {props.Name} <br />  Average Temperture:{props.temperture} <br /> 
    </div>
)
}