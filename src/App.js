import React from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import Home from './components/home/Home';

import './App.css';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home}></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
