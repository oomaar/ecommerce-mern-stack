import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartScreen, HomeScreen, ProductScreen } from "./Screens";
import { Navbar } from "./Components";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
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
