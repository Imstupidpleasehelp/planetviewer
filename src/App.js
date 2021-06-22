import "./App.css";
import React, {Component} from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Interstellar } from "./interstellar-view/interstellar";
import { SolSystem } from "./systems/sol/solsystem";
import { GenerateSystem } from "./systems/generatesystem";
import { GeneratePlanet } from "./systems/generatePlanet";
import { Navigation } from "./components/navigation";
import { AnimatePresence, motion } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <AnimatePresence className="App">
     {/*} <Navigation /> {" "} */}
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Interstellar} />
        <Route exact path="/sol" component={SolSystem} />
        <Route
          exact
          path="/:id"
          render={(props) => <GenerateSystem {...props} />}
        />
        <Route exact path ="/planet/:id" component={GeneratePlanet} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
