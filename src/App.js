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
  
  return (
    
       <AnimatePresence exitBeforeEnter={true}>
       <Switch  location={location} key={location.pathname}>
       
      
         
<Route exact path="/" key="loading"  component={Loading} />
            <Route  path="/sol" key="menu"  component={Menu} />
         
          <Route path="/mercury" key="mercury" component={Mercury} />
          <Route path="/venus" key="venus" component={Venus} />
          <Route path="/earth" key="earth" component={Earth} />
          <Route path="/mars" key="mars" component={Mars} />
          <Route path="/juipter" key="juipter" component={Juipter} />
          <Route path="/saturn" key="saturn" component={Saturn} />
          <Route path="/uranus" key="uranus" component={Uranus} />
          <Route path="/neptune" key="neptune" component={Neptune} />
    </Switch> </AnimatePresence>
     
   
  );
}

export default App;
