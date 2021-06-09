
import { gsap } from "gsap";
import {useEffect} from 'react'


export const SolSystem = (props) => {
    useEffect(() => {
props.setBar("Sol System")
    }, [])
    return (
        <div className="sol-system-master">
            
            <div
        className="sun"
        onMouseOver={() => props.setBar("Yellow Dwarf Star")}
       
      ></div>


        </div>
    )
}