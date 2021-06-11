import "./interstellar-space.less";
import { Star } from "./stars/star";
import { gsap } from "gsap";
import { useEffect } from "react";
export const Interstellar = () => {
  useEffect(() => {
    stuff();
  });
  function stuff() {
    //gsap.to(".yellow-dwarf", { rotation: 27, x: 1000, duration: 15 });
  }
  return (
    <div className="interstellar-space">
      
     <Star name="Sol" starType="sol-system"></Star>
      <Star name="steve" starType="yellow-dwarf"></Star>
    </div>
  );
};

// red giant, red supergiant, blue giant, white dwarf, yellow dwarf, red dwarf, brown dwarf