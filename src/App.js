import React from "react";
import '../src/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Detail from './detail/detail'
import Home from './home/home'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
              return (
                <Redirect to="/home" /> 
              )
          }}
        />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}




