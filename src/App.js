import "./App.css";
import {useState} from 'react'
import { Switch, Route, useLocation } from "react-router-dom";
import { Interstellar } from "./interstellar-view/interstellar";
import { SolSystem } from "./systems/sol/solsystem";
import { GenerateSystem } from "./systems/generatesystem";
import { GeneratePlanet } from "./systems/generatePlanet";
import { AnimatePresence, motion } from "framer-motion";

import { NavLink } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <AnimatePresence className="App">
      <Navigation /> {" "}
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Interstellar} />
        <Route exact path="/sol" component={SolSystem} />
        <Route
          exact
          path="/:id"
          render={(props) => <GenerateSystem {...props} />}
        />
        <Route exact path="/planets/:id" component={GeneratePlanet} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;

export const Navigation = () => {
  const [Scan, setScan] = useState('')
  return (
    <div className="container-fluid navbar">
      <div className="row">
        <NavLink to="/" className="col-sm-4">
          <div className="">left</div>
        </NavLink>
        <NavLink to="/" className="col-sm-4">
          <div className="">middle</div>
        </NavLink>{" "}
        <NavLink to="/" className="col-sm-4">
          <div className="">right</div>
        </NavLink>
      </div>
    </div>
  );
};
