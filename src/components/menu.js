import React from 'react'
import { MiniPlanet } from './miniplanet'
import { Earth } from './planets/Earf'
import { PlanetView } from './planetview'


export const Menu = () => {
    return (
        <div className="menuMaster">
            
          <MiniPlanet name="EARF" className="earthMini"  />
        </div>
    )
}