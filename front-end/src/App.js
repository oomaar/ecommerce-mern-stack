import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { CartScreen, HomeScreen, ProductScreen } from "./Screens";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
