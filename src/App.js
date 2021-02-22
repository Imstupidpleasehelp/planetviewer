import "./App.scss";
import react, { useState } from "react";
import { Menu } from "./components/menu";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Earth } from "./components/planets/Earf";
import ParticlesBg from "particles-bg";
import { NavLink } from "react-router-dom";
import { Mars } from "./components/planets/mars";
import { Mercury } from "./components/planets/mercury";
import { Venus } from "./components/planets/venus";
import { Juipter } from "./components/planets/juipter";
import { Saturn } from "./components/planets/saturn";
import { Uranus } from "./components/planets/Uranus";
import { Neptune } from "./components/planets/Neptune";
import { Loading } from "./components/loading";
import { Stars } from "./components/stars";
import { Bar } from "./components/bar";
function App() {
  const location = useLocation();
  const [inSystem, setIn] = useState(false);
  const [BarText, setBar] = useState("Select target to scan")
  return (
    <div className="wrapper">
      <Bar BarText={BarText} setBar={setBar} />
      <AnimatePresence exitBeforeEnter={true}>
        <Switch location={location} key={location.pathname}>
         
          <Route
            exact
            path="/"
            render={(props) => {
              return <Loading {...props} functions={[inSystem, setIn]} setBar={setBar} />;
            }}
          />
          <Route
            exact
            path="/sol"
            render={(props) => {
              return <Menu {...props} functions={[inSystem, setIn]} setBar={setBar} />;
            }}
          />
<Route
            exact
            path="/mercury"
            render={(props) => {
              return <Mercury {...props} functions={[inSystem, setIn]} setBar={setBar} />;
            }}
          />
        <Route
            exact
            path="/venus"
            render={(props) => {
              return <Venus {...props} functions={[inSystem, setIn]} setBar={setBar} />;
            }}
          />
         <Route
            exact
            path="/earth"
            render={(props) => {
              return <Earth {...props} functions={[inSystem, setIn]} setBar={setBar} />;
            }}
          />
          
          <Route
            exact
            path="/mars"
            render={(props) => {
              return <Mars {...props} functions={[inSystem, setIn]} setBar={setBar} />;
            }}
          />
         <Route
            exact
            path="/juipter"
            render={(props) => {
              return <Juipter {...props} functions={[inSystem, setIn]} setBar={setBar} />;
            }}
          />
          <Route
            exact
            path="/saturn"
            render={(props) => {
              return <Saturn {...props} functions={[inSystem, setIn]} setBar={setBar} />;
            }}
          />
         <Route
            exact
            path="/uranus"
            render={(props) => {
              return <Uranus {...props} functions={[inSystem, setIn]} setBar={setBar} />;
            }}
          />
          <Route
            exact
            path="/neptune"
            render={(props) => {
              return <Neptune {...props} functions={[inSystem, setIn]} setBar={setBar} />;
            }}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
