import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Favorites from './components/Favorites';

function App() {

  return (
    <>
    <Router>
      <Header />
      <main>

      <Switch>
        <Route path="/favorites">
          <Favorites />
        </Route>
        
      <Route path="/">
        <Home />
      </Route>
      </Switch>
      </main>
      </Router>
    </>
  );
}

export default App;
