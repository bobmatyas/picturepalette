import React from 'react';
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Heading from './components/Heading';
import Welcome from './components/Home-Welcome';
import ColorSelection from './components/Color-Selection';
import HomeSearch from './components/Home-Search';
import { useColorContext } from './ColorProvider';

function App() {

  const { color } = useColorContext();

  return (
    <>
      <Header />

      <main>
        <Heading />
        { color.length < 1 ? <Welcome /> : '' }
        { color.length < 1 ?  <ColorSelection /> : '' }
        { color.length < 1 ? ' ' : <HomeSearch /> }

      </main>
    </>
  );
}

export default App;
