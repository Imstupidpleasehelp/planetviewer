import "./interstellar-space.scss";
import { Star } from "./stars/star";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
export const Interstellar = () => {
  const [exoStars, setExoStars] = useState( )
  const getStarsFromLocalStorage = () => {
    localStorage.getItem('exoStars')
  }
  const saveStarsToLocalStorage = () => {
    localStorage.setItem('exoStars', exoStars)
  }
  useEffect(() => {
    const savedStars = getStarsFromLocalStorage();
    if (savedStars) {
      setExoStars(savedStars);
      return;
    }
  
    const newStars = makeStars();
    saveStarsToLocalStorage(newStars)
    setExoStars(newStars)
    EnterSystem();
  }, [])
 

  // animations 
  
  function EnterSystem() {
 // gsap.to(".interstellar-space", { scaleX: 2, scaleY: 2, transformOrigin:"center", duration: 3 });
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
              starType={`${starList[Math.floor(Math.random() * 6 + 1)]} ${posList[Math.floor(Math.random() * 9 + 1)]}`}
            ></Star>
           
           {makeStars((num - 1))}
          </div>
          
        );
        
   }
      };

    
  
  return (
    <div className="interstellar-space">
      
      <Star name="Sol"  starType="sol-system"  />
      <div className="random-placement">{exoStars}</div>
     <button onClick={EnterSystem()}>aaa</button>
    </div>
  );
};

// red giant, red supergiant, blue giant, white dwarf, yellow dwarf, red dwarf, brown dwarf
