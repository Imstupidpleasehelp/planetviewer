
import './App.css';

import { Switch, Route} from "react-router-dom";
import { Interstellar } from './interstellar-view/interstellar';
import { SolSystem } from './systems/sol/solsystem';
import { GenerateSystem } from './systems/generatesystem';
import {Navigation} from './components/navigation'
function App() {
  return (
    <div className="App">
      {/*<Navigation /> */} <Switch >
       
      <Route exact path="/" component={Interstellar} />
        <Route exact path="/sol" component={SolSystem} />
        <Route
              exact
              path="/:id"
              render={props => (
                <GenerateSystem {...props}  />
              )}
            />
      </Switch>
    </div>
  );
}

export default App;
