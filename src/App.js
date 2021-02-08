
import './App.scss';
import { Menu } from './components/menu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Earth } from './components/planets/Earf';
import ParticlesBg from 'particles-bg'
import { Mars } from './components/planets/mars';
function App() {
  let config = {
    num: [15, 20],
    rps: 0.5,
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
    random: 2,  // or null,
    g: 1,    // gravity
    // f: [2, -1], // force
    
  };
  return (
    <Router>
     {/* <ParticlesBg color="#FFF" className="backgroundMaster" type="custom" config={config} bg={true} /> */}
    <div className="App">
      <Route exact path="/" component={Menu} />
    </div>
    <Route path="/earth" component={Earth} />
    <Route path="/mars" component={Mars} />
    </Router>
  );
}

export default App;
