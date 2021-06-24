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
  const [Scan, setScan] = useState("test");
  const [open, setOpen] = useState("navbar-open");
  const openNav = () => {
    setOpen("navbar-open");
  };
  const closeNav = () => {
    setOpen("navbar-closed");
  };
  return (
    <div className={`container-fluid`}>
      <div className="button-container">
        {open === "navbar-open" ? (
          <button onClick={() => closeNav()} className="">make small</button>
        ) : (
          <button onClick={() => openNav()} className="">
            Make big
          </button>
        )}
      </div>
      <div className={` navbar ${open}`}>
        <div className="nav-item"><NavLink to="/">Intersellar Space</NavLink></div>
        <div className="scan-bar">{Scan}</div>
      </div>
    </div>
  );
};
