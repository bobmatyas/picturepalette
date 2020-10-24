import React from 'react';
import './App.css';
import Header from './components/Header';
import Heading from './components/Heading';
import Welcome from './components/Home-Welcome';
import ColorSelection from './components/Color-Selection';
import { useColorContext } from './ColorProvider';

function App() {

  const { color } = useColorContext();

  return (
    <>
      <Header />

      <main>
        <Heading />
        <Welcome />
        { color.length < 1 ?  <ColorSelection /> : '' }

      </main>

    </>
  );
}

export default App;
