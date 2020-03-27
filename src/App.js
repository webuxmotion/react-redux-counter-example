import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  selectCount,
} from './features/counter/counterSlice';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const count = useSelector(selectCount);

  return (
    <div className="App">
      <div>{count}</div>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Counter />
          </Route>
          <Route path="/about">
            <div>about</div>
          </Route>
          <Route path="/dashboard">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
