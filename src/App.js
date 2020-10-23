import React from 'react';
import './App.css';
import Header from './components/Header';
import Heading from './components/Heading';
import Welcome from './components/Home-Welcome';
import ColorSelection from './components/Color-Selection';

function App() {


  return (
    <>
      <Header />

      <main>
        <Heading />
        <Welcome />
        <ColorSelection />

      </main>

    </>
  );
}

export default App;
