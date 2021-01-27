import React from 'react'
import { MiniPlanet } from './miniplanet'
import { Earth } from './planets/Earf'
import { PlanetView } from './planetview'


export const Menu = () => {
    return (
        <div className="container">
            <div className="sun">

            </div>
          <MiniPlanet  className="earthMini"  />
        </div>
    )
}