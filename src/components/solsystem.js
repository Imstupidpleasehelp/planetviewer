import "./sol-system.scss"
import { gsap } from "gsap";
import {useEffect} from 'react'
import { MiniPlanet } from "../components/miniplanet";

export const SolSystem = (props) => {
    useEffect(() => {
        props.setBar("Sol System")
        Orbit();
    })
    const Orbit = () => {
        gsap.to(".sol-system-master", {rotation: 360, x: 100, y: 100, duration: 5})
    }
    return (
        <div className="sol-system-master">
            
            <div
        className="sun"
       // onMouseOver={() => props.setBar("Yellow Dwarf Star")}
       
      ></div>
      <div //onMouseOver={() => props.setBar("Barren World")}
      //onMouseLeave={() => props.setBar('Sol System')}
        >
 <MiniPlanet name="mercury"  className=" mercuryMini " /></div>
 <MiniPlanet name="venus" className=" venusMini " />
 <MiniPlanet name="earth" className=" earthMini " />
 <MiniPlanet name="mars" className=" marsMini " />
 <MiniPlanet name="juipter" className=" juipterMini " />
 <MiniPlanet name="saturn" className=" saturnMini " />
 <MiniPlanet name="uranus" className=" uranusMini " />
 <MiniPlanet name="neptune" className="neptuneMini " />
        </div>
    )
}