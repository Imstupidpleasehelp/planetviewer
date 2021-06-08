import "./interstellar-space.scss"
import {Star} from './stars/star'
import {gsap} from 'gsap'
import {useEffect} from 'react'
export const Interstellar = () => {
    useEffect(() => {
      stuff()  
    })
    function stuff() {
        gsap.to(".yellow-dwarf", {rotation: 27, x: 100, duration: 5});
    }
    return(
        <div className="interstellar-space">
            <div className="sol-system"><Star name="Sol" starType="yellow-dwarf"></Star></div>
            <Star name="yes" starType="yellow-dwarf"></Star>
        </div>
    )
}


// red giant, red supergiant, blue giant, white dwarf, yellow dwarf, red dwarf, brown dwarf 