import "./App.scss";
import { useState } from "react";
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
      <Navigation />{" "}
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" render={(props) => <Interstellar {...props} />} />
        <Route exact path="/sol" render={(props) => <SolSystem {...props} />} />
        <Route
          exact
          path="/:id"
          render={(props) => <GenerateSystem {...props} />}
        />
        <Route
          exact
          path="/planets/:id"
          render={(props) => <GeneratePlanet {...props} />}
        />
      </Switch>
    </AnimatePresence>
  );
}

export default App;

export const Navigation = () => {
  const [Scan, setScan] = useState("");
  const [open, setOpen] = useState("navbar-closed");
  const openNav = () => {
    setOpen("navbar-open");
  };
  const closeNav = () => {
    setOpen("navbar-closed");
  };
  return (

     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <NavLink to="/">Interstellar Space</NavLink>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      
      </li>
    </ul>
   
  </div>
</nav>
  );
};
