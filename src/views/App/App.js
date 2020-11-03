import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LayoutIndex from "../Layout/Layout";
import Login from "../Login/Login";
function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <LayoutIndex />
      </Route>
    </Switch>
  );
}

export default App;
