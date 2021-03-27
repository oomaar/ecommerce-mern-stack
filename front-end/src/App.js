import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartScreen, HomeScreen, ProductScreen } from "./Screens";
import { Backdrop, Navbar, Sidebar } from "./Components";
import './App.css';
import { GlobalStyles } from "./GlobalStyles";
import { selectDarkMode } from "./redux/darkModeSlice";
import { useSelector } from "react-redux";

function App() {
  const [toggleShow, setToggleShow] = useState(false);
  const dark = useSelector(selectDarkMode);

  return (
    <Router>
      <GlobalStyles dark={dark} />
      <Navbar click={() => setToggleShow(true)} />
      <Sidebar click={() => setToggleShow(false)} toggleShow={toggleShow} />
      <Backdrop click={() => setToggleShow(false)} toggleShow={toggleShow} />
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
