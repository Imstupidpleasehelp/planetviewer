import "./sol-system.scss"
import { gsap } from "gsap";
import {useEffect} from 'react'
import { MiniPlanet } from "../components/miniplanet";

export const SolSystem = (props) => {
    useEffect(() => {
props.setBar("Sol System")
    }, [])
    return (
        <div className="sol-system-master">
            
            <div
        className="sun"
       // onMouseOver={() => props.setBar("Yellow Dwarf Star")}
       
      ></div>
 <MiniPlanet name="mercury" className=" mercuryMini " />
 <MiniPlanet name="venus" className=" venusMini " />
 <MiniPlanet name="earth" className=" earthMini " />
        </div>
    )
}