import "./generatesystem.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { MiniPlanet } from "../components/miniplanet";

import { motion } from "framer-motion";
import { gsap } from "gsap";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const GenerateSystem = (props) => {
  const [planets, setPlanets] = useState();
  useEffect(() => {
    EnterSystem();
    MakeTheSystem();
(planets ? Orbit() : console.log('a'))
  
  }, []);
  //animations
  const backToInterstellar = {
    leaveSystem: {
      scale: 0.01,
      transition: {
        duration: 3,
      },
    },
  };

  const showMeHud = {
    start: {
      scale: 0.1,
    },
    enter: {
      scale: 1,
      transition: {
        duration: 5,
      },
    },
    exit: {
      scale: 0.01,
      transition: {
        duration: 3,
      },
    },
  };

  function ExitSystem() {
    gsap.to(".generatedSystem", {
      scaleX: 0.1,
      scaleY: 0.1,
      transformOrigin: "center",
      duration: 3,
    });
    setTimeout(() => {
      props.history.push("/");
    });
  }
  function EnterSystem() {
    gsap.from(".generatedSystem", {
      scaleX: 0.1,
      scaleY: 0.1,
      transformOrigin: "center",
      duration: 3,
    });
    gsap.to(".generatedSystem", {
      scaleX: 1,
      scaleY: 1,
      transformOrigin: "center",
      duration: 3,
    });
  }

  const query = useQuery();
  const starType = query.get("starType");
  const starName = query.get("name");
  const splitCss = starType.split(" ");
  // making planets

  function makeid() {
    let r = Math.random().toString(36).substring(7);

    return r;
  }

  let planetTypes = [
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Earth-like-world",

    "Earth-like-world",
    "Toxic-world",
    "Frozen-world",
    "Ocean-world",
    "Rocky-world",
    "Toxic-world",
    "Frozen-world",
    "Ocean-world",
    "Rocky-world",
    "Toxic-world",
    "Frozen-world",
    "Ocean-world",
    "Rocky-world",
    "Toxic-world",
    "Frozen-world",
    "Ocean-world",
    "Rocky-world",
    "Toxic-world",
    "Frozen-world",
    "Ocean-world",
    "Rocky-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
  ];
  let posList = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9"];
  function RandomNum() {
    return Math.floor(Math.random() * 5 + 3);
  }
  const makePlanets = (num = 5) => {
    if (num > 0) {
      return (
        <div
          className={`planetWrap ${posList[Math.floor(Math.random() * 8 + 1)]}`}
        >
          <MiniPlanet
            name={`${makeid()}`}
            label={``}
            className={`${planetTypes[Math.floor(Math.random() * 56 + 1)]} 
          }`}
          >
            {" "}
          </MiniPlanet>
          {makePlanets(num - 1)}
        </div>
      );
    }
  };
  async function MakeTheSystem() {
    setPlanets(makePlanets(RandomNum()));
  
  }
  function Orbit() {
    gsap.to(".a1", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 15,
    });
    gsap.to(".a2", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 15,
    });
    gsap.to(".a3", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 15,
    });
    gsap.to(".a4", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 15,
    });
    gsap.to(".a5", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 15,
    });
    gsap.to(".a6", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 15,
    });
    gsap.to(".a7", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 15,
    });
    gsap.to(".a8", {
      rotation: -360,
      ease: "linear",
      repeat: Infinity,
      duration: 15,
    });
  }

  return (
    <motion.div
      variants={backToInterstellar}
      exit="leaveSystem"
      className="generatedSystem"
    >
      <Link to="/">Back to space</Link>
      <div className={splitCss[0] + "1"}></div>{" "}
      <div className="random-placement">{planets}</div>
    </motion.div>
  );
};
