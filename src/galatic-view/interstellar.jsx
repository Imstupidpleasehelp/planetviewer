import "./interstellar-space.scss"
import {Star} from './stars/starPreview'
export const Interstellar = () => {
    return(
        <div className="interstellar-space">
            <div className="sol-system"><Star name="Sol" starType="yellow-dwarf"></Star></div>
            <Star name="yes" starType="yellow-dwarf"></Star>
        </div>
    )
}


// red giant, red supergiant, blue giant, white dwarf, yellow dwarf, red dwarf, brown dwarf 