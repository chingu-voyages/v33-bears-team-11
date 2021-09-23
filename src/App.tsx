import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar/Navbar'

//Page imports
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Search2 from './pages/Search/Search2';
import Favorites from './pages/Favorites/Favorites';
import Register from './pages/Register/Register';
import PetDetails from './pages/PetDetails/PetDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/search" component={Search2}></Route>
          <Route exact path="/favorites" component={Favorites}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/details" component={PetDetails}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
