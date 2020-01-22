import React from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import AppHeader from './components/app-header/AppHeader';
import Home from './components/home/Home';

import './App.css';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader/>
        <Switch>
           <Route path="/home" component={Home}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
