//@ts-nocheck
import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import ListPets from './pets/ListPets';

import Navbar from './components/Navbar/Navbar'

//Page imports
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Favorites from './pages/Favorites/Favorites';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/favorites" component={Favorites}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
