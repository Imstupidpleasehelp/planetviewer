import "./interstellar-space.scss";
import { Star } from "./stars/star";
import { gsap } from "gsap";
import { useEffect } from "react";
export const Interstellar = () => {
  useEffect(() => {
   makeid()
   RandomStarNum()
  });
  //function stuff() {
    //gsap.to(".yellow-dwarf", { rotation: 27, x: 1000, duration: 15 });
  //}
  function makeid(length) {
    let r = Math.random().toString(36).substring(7);
    
    console.log(r)
    return r
   }
   function RandomStarNum() {
    var num = Math.floor(Math.random() * 7 + 1);
    console.log(num)
    return num
   }
   const starList = {
    1: 'red giant',
    2: 'red supergiant',
    3: 'blue giant',
    4: 'white dwarf',
    5: 'yellow dwarf',
    6: 'red dwarf',
    7: 'brown dwarf'
   }

 const makeStars = () => {

 }
  return (
    <div className="interstellar-space">
      
     <Star name="Sol" starType="sol-system"></Star>
     <div className="random-placement">
       
     </div>
      
    </div>
  );
};

// red giant, red supergiant, blue giant, white dwarf, yellow dwarf, red dwarf, brown dwarf
