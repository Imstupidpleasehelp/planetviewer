import "./sol-system.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
export const MiniPlanet = (props) => {
  return (
    <NavLink to={`planets/${props.name}`}>
      <div className="miniPlanet">
        <div className={`${props.className}`}></div>
      </div>
    </NavLink>
  );
};

export const SolSystem = () => {
  useEffect(() => {
    Orbit();
  });

  const Orbit = () => {
    gsap.set(".wrapper", {
      xPercent: 0,
      yPercent: -50,
      x: 0,
      y: 0,
      transformOrigin: "20vw center",
    });

    gsap.to(".wrapper", {
      rotation: 360,
      ease: "none",
      repeat: -1,
      duration: 13,
    });
    gsap.to(".planet1", {
      rotation: -360,
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
  };
  return (
    <div className="sol-system-master">
      <div className="sun">Sun</div>

      <div className="wrapper">
        <MiniPlanet name="Mercury" className="mercuryMini ">
          Mercury
        </MiniPlanet>

        <div className="wrapper2">
          <div className="orbit-container2">
            <MiniPlanet name="venus" className=" venusMini " />
            Venus
          </div>
        </div>
        <div className="orbit-container3">
          <MiniPlanet name="earth" className=" earthMini " />
          Earth
        </div>
        <div className="orbit-container4">
          <MiniPlanet name="mars" className="  marsMini " />
          Mars
        </div>
        <div className="orbit-container5">
          <MiniPlanet name="juipter" className=" juipterMini " />
          Juipter
        </div>
        <div className="orbit-container6">
          <MiniPlanet name="saturn" className=" saturnMini " />
          Saturn{" "}
        </div>
        <div className="orbit-container7">
          <MiniPlanet name="uranus" className=" uranusMini " />
          Uranus
        </div>
        <div className="orbit-container8">
          <MiniPlanet name="neptune" className=" neptuneMini " />
          Neptune{" "}
        </div>
      </div>
    </div>
  );
};
