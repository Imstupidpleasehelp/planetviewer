
import './App.css';

import { Switch, Route} from "react-router-dom";
import { Interstellar } from './interstellar-view/interstellar';
import { SolSystem } from './systems/sol/solsystem';
import {Navigation} from './components/navigation'
function App() {
  return (
    <div className="App">
      <Navigation /> <Switch >
       
      <Route exact path="/" component={Interstellar} />
        <Route exact path="/sol" component={SolSystem} />
      </Switch>
    </div>
  );
}

export default App;
