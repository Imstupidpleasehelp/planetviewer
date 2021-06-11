
import './App.scss';
import {StarsBackGround} from './components/starsbackground'

import { Switch, Route} from "react-router-dom";
import { Interstellar } from './interstellar-view/interstellar';
import { SolSystem } from './systems/sol/solsystem';

function App() {
  return (
    <div className="App">
      <Switch >
      <Route exact path="/" component={Interstellar} />
        <Route exact path="/sol" component={SolSystem} />
      </Switch>
    </div>
  );
}

export default App;
