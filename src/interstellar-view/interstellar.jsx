import "./interstellar-space.scss";
import { Star } from "./stars/star";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { GenerateSystem } from "../systems/generatesystem";
export const Interstellar = () => {
  useEffect(() => {
    
   
  });
 

  // animations 
  function stuff() {
  gsap.to(".yellow-dwarf", { rotation: 27, x: 1000, duration: 15 });
  }
  // auto generation stuff 
  function makeid() {
    let r = Math.random().toString(36).substring(7);

    return r;
  }

  let starList = [
    "red-giant",
    "red-supergiant",
    "blue-giant",
    "white-dwarf",
    "yellow-dwarf",
    "red-dwarf",
    "brown-dwarf",
  ];
  let posList = [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"
  ]
function RandomNum() {
 return Math.floor(Math.random() * 5 + 3);
}
  const makeStars = (num  = 5) => {
    
    
   if (num > 0) {
        return (
          <div className="starWrapper">
            <Star
              name={`${makeid()}`}
            label={``}
              starType={`${starList[Math.floor(Math.random() * 6 + 1)]} ${posList[Math.floor(Math.random() * 9 + 1)]}`}
            ></Star>
           
           {makeStars((num - 1))}
          </div>
          
        );
        
   }
      };

    
  
  return (
    <div className="interstellar-space">
      
      <Star name="Sol" label="sol-label" starType="sol-system"  />
      <div className="random-placement">{makeStars(RandomNum())}</div>
      <button onClick={() => stuff()}>Test</button>
    </div>
  );
};

// red giant, red supergiant, blue giant, white dwarf, yellow dwarf, red dwarf, brown dwarf
