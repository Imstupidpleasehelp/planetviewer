import "./sol-system.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { MiniPlanet } from "../../components/miniplanet";

export const SolSystem = () => {
  useEffect(() => {
    Orbit();
  });

  const Orbit = () => {
    
    gsap.set(".wrapper2", {
        xPercent: 0,
        yPercent: -50,
        x: 0,
        y: 0,
        transformOrigin: "20vw center",
      });
  
      gsap.to(".wrapper2", {
        rotation: 360,
        ease: "none",
        repeat: -1,
        duration: 13,
      });
    gsap.to(".orbit-container2", {
        rotation: -360,
        ease: "none",
        repeat: -1,
        duration: 13,
    });
    gsap.to(".orbit-container3", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 23,
    });
    gsap.to(".orbit-container4", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 32,
    });
    gsap.to(".orbit-container5", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 45,
    });
    gsap.to(".orbit-container6", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 55,
    });
    gsap.to(".orbit-container7", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 57,
    });
    gsap.to(".orbit-container8", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 60,
    });
  };
  return (
    <div className="sol-system-master">
      <div className="sun"></div>

      
       <MiniPlanet name="mercury" className="mercuryMini orbit-container" />Mercury
        
      <div className="wrapper2">
      <div className="orbit-container2">
        <MiniPlanet name="venus" className=" venusMini " />
      </div></div>
      <div className="orbit-container3">
        <MiniPlanet name="earth" className=" earthMini " />
      </div>
      <div className="orbit-container4">
        <MiniPlanet name="mars" className="  marsMini " />
      </div>
      <div className="orbit-container5">
        <MiniPlanet name="juipter" className=" juipterMini " />
      </div>
      <div className="orbit-container6">
        <MiniPlanet name="saturn" className=" saturnMini " />
      </div>
      <div className="orbit-container7">
        <MiniPlanet name="uranus" className=" uranusMini " />
      </div>
      <div className="orbit-container8">
        <MiniPlanet name="neptune" className=" neptuneMini " />
      </div>
    </div>
  );
};
