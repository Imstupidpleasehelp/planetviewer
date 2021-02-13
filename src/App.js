import "./App.scss";
import react, {useState} from 'react';
import { Menu } from "./components/menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
function App() {
  const [inSystem, setIn] = useState(false);
  let config = {
    num: [25, 20],
    rps: 14,
    radius: [1, 1.5],
    life: [6, 3],
    v: [2, 3],

    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "all", // all or center or {x:1,y:1,width:100,height:100}
    color: ["#FFFFFF"],
    cross: "dead", // cross or bround
    random: 2, // or null,
    g: 1, // gravity
    // f: [2, -1], // force
  };
  return (
    
      <Router>
       <Switch>
       {/* <ParticlesBg
          color="#FFF"
          className="backgroundMaster"
          type="custom"
          config={config}
          bg={true}
        />
       {*/}
      {/* initial="out"
    animate="in"
    exit="out"
    variants={changepage}
      transition={pagetransition} */}
          <AnimatePresence exitBeforeEnter>
<Route exact path="/" passMeDown={[inSystem, setIn]} component={Loading} />
            <Route exact path="/sol" passMeDown={[inSystem, setIn]} component={Menu} />
         
          <Route path="/mercury" component={Mercury} />
          <Route path="/venus" component={Venus} />
          <Route path="/earth" component={Earth} />
          <Route path="/mars" component={Mars} />
          <Route path="/juipter" component={Juipter} />
          <Route path="/saturn" component={Saturn} />
          <Route path="/uranus" component={Uranus} />
          <Route path="/neptune" component={Neptune} />
     </AnimatePresence></Switch>
      </Router>
   
  );
}

export default App;
