import React from 'react'
import { MiniPlanet } from './miniplanet'
import { Earth } from './planets/Earf'
import { PlanetView } from './planetview'


export const Menu = () => {
    return (
        <div className="container">
            <div className="sun">

            </div>
          <MiniPlanet className="mercuryMini" name="mercury" />
          <MiniPlanet className="venusMini" name="venus" />
          <MiniPlanet  className="earthMini" name="earth"  />
          <MiniPlanet className="marsMini" name="mars" />
          
          
          <MiniPlanet className="juipterMini" name="juipter" />
          <MiniPlanet className="saturnMini" name="saturn" />
          <MiniPlanet className="uranusMini" name="uranus" />
          <MiniPlanet className="neptuneMini" name="neptune" />
        </div>
    )
}