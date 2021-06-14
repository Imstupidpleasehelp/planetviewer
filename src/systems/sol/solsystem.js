import "./sol-system.css"
import { gsap, Power0 } from "gsap";
import {useEffect} from 'react'
import { MiniPlanet } from "../../components/miniplanet";

export const SolSystem = () => {
    useEffect(() => {
        
        Orbit();
    })
    const Orbit = () => {
        gsap.to(".orbit-container", {rotation: -360, ease: "linear",  repeat: Infinity, duration: 1})
    }
    return (
        <div className="sol-system-master">
            
            <div
        className="sun"
       
       
      >

      </div>
      
          <div className="orbit-container">
 <MiniPlanet name="mercury"  className="miniplanet mercuryMini " /></div>
 <MiniPlanet name="venus" className="miniplanet  venusMini " />
 <MiniPlanet name="earth" className="miniplanet  earthMini " />
 <MiniPlanet name="mars" className="miniplanet  marsMini " />
 <MiniPlanet name="juipter" className="miniplanet  juipterMini " />
 <MiniPlanet name="saturn" className="miniplanet  saturnMini " />
 <MiniPlanet name="uranus" className="miniplanet  uranusMini " />
 <MiniPlanet name="neptune" className="miniplanet neptuneMini " />
        </div>
    )
}