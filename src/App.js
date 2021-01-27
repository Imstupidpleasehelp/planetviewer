
import './App.css';
import { Menu } from './components/menu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Earth } from './components/planets/Earf';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Menu} />
    </div>
    <Route path="/earth" component={Earth} />
    </Router>
  );
}

export default App;
