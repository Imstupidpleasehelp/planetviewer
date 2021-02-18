import "./App.scss";
import react, {useState} from 'react';
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
function App() {
  const location = useLocation();
  const [inSystem, setIn] = useState(false);
  return (
    <div className="backgroundclass">
       <AnimatePresence exitBeforeEnter={true}>
       <Switch  location={location} key={location.pathname}>
       
      
         
<Route exact path="/" setIn={setIn} inSystem={inSystem}  component={Loading} />
            <Route  path="/sol"   component={Menu} />
         
          <Route path="/mercury"  component={Mercury} />
          <Route path="/venus"  component={Venus} />
          <Route path="/earth"  component={Earth} />
          <Route path="/mars"  component={Mars} />
          <Route path="/juipter"  component={Juipter} />
          <Route path="/saturn"  component={Saturn} />
          <Route path="/uranus"  component={Uranus} />
          <Route path="/neptune"  component={Neptune} />
     </Switch></AnimatePresence>
     
   </div>
  );
}

export default App;
