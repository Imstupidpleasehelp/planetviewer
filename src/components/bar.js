import React from 'react'



export const Bar = (props) => {
    return(
        <div>
        <div className="barSpacer"></div>
        <div className=" bar">{props.BarText}</div>
        <div className="barSpacer"></div>
        </div>
    )
}