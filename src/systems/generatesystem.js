import  "./generatesystem.css"
import React, {useEffect} from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const GenerateSystem = (props) => {
    useEffect(() => {
        console.log(splitCss)
    })
    const {name} = useParams();
    
    const query = useQuery();
    const starType = query.get('starType')
const splitCss = starType.split(' ')
    return(<div className="generatedSystem"><div className={splitCss[0] +'1'}></div> </div>)
}