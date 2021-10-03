import React from "react";
import { Row, Column } from "./components/grid/GridElements";
import Topbar from './components/Topbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dogs from './views/Dogs'
import Adoptions from './views/Adoptions'
import Checkout from './views/Checkout'
import "./App.css";

function App() {

  
  return (
    <>
      <Router>
        <Topbar/>
        <Switch>
          <Route path="/dogs" exact component={Dogs}></Route>
          <Route path="/adoptions" exact component={Adoptions}></Route>
          <Route path="/checkout" exact component={Checkout}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
