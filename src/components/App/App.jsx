import React from 'react';
import './App.css';
// aliasing HashRouter as Router
// we want to use the thing 'HashRouter' but call it "Router"
// to install -- npm install react-router-dom@5 (for Prime stuff at least)

import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Search from '../Search/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>SPAs!</h1>

        {/* Nav Bar */}
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/animals'>Animals</Link>
            </li>
            <li>
              <Link to='/plants'>Plants</Link>
            </li>
            <li>
              <Link to='/Bears'>Bears</Link>
            </li>
            <li>
              <Link to="/animals/details/47">Details for animals with id of 47</Link>
            </li>
            <li>
              <Link to='/search?legs=1000&type=insect'>Search for an insect with 1000 legs</Link>
            </li>
          </ul>
        </nav>

        <Route path="/animals" exact>
          <Animals />
        </Route>
        <Route path="/plants">
          <Plants />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* route parameters, to the front(end) this time */}
        {/* can add multiple params /details/:id/:butts/:hello */}
        <Route path='/animals/details/:id'>
          <AnimalDetails />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
      </div>
    </Router>
  );
}

export default App;
