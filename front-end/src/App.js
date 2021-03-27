import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartScreen, HomeScreen, ProductScreen } from "./Screens";
import { Backdrop, Navbar, Sidebar } from "./Components";
import './App.css';
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const [toggleShow, setToggleShow] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <GlobalStyles darkMode={darkMode} />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} click={() => setToggleShow(true)} />
      <Sidebar darkMode={darkMode} click={() => setToggleShow(false)} toggleShow={toggleShow} />
      <Backdrop darkMode={darkMode} click={() => setToggleShow(false)} toggleShow={toggleShow} />
      <main>
        <Switch>
          <Route exact path="/">
            <HomeScreen darkMode={darkMode} />
          </Route>
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
