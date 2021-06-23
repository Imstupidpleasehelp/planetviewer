import "./sol-system.css"
import { gsap} from "gsap";
import {useEffect} from 'react'
import { MiniPlanet } from "../../components/miniplanet";

export const SolSystem = () => {
    useEffect(() => {
        Orbit();
    })
    const Orbit = () => {
        gsap.to(".orbit-container", {rotation: -360, ease: "linear",  repeat: Infinity, duration: 11})
        gsap.to(".orbit-container2", {rotation: -360, ease: "linear",  repeat: Infinity, duration: 16})
        gsap.to(".orbit-container3", {rotation: -360, ease: "linear",  repeat: Infinity, duration: 23})
        gsap.to(".orbit-container4", {rotation: -360, ease: "linear",  repeat: Infinity, duration: 32})
        gsap.to(".orbit-container5", {rotation: -360, ease: "linear",  repeat: Infinity, duration: 45})
        gsap.to(".orbit-container6", {rotation: -360, ease: "linear",  repeat: Infinity, duration: 55})
        gsap.to(".orbit-container7", {rotation: -360, ease: "linear",  repeat: Infinity, duration: 57})
        gsap.to(".orbit-container8", {rotation: -360, ease: "linear",  repeat: Infinity, duration: 60})
    }
    return (
        <div className="sol-system-master">
            
            <div
        className="sun"
       
       
      >

      </div>
      
          <div className="orbit-container">
 <MiniPlanet name="mercury"   className=" mercuryMini " /></div>
 <div className="orbit-container2">
 <MiniPlanet name="venus" className="venusMini " /></div>
 <div className="orbit-container3">
 <MiniPlanet name="earth" className=" earthMini " /></div>
 <div className="orbit-container4">
 <MiniPlanet name="mars" className="  marsMini " /></div>
 <div className="orbit-container5">
 <MiniPlanet name="juipter" className=" juipterMini " /></div>
 <div className="orbit-container6">
 <MiniPlanet name="saturn" className=" saturnMini " /></div>
 <div className="orbit-container7">
 <MiniPlanet name="uranus" className=" uranusMini " /></div>
 <div className="orbit-container8">
 <MiniPlanet name="neptune" className=" neptuneMini " /></div>
        </div>
    )
}