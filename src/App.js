import React from 'react';
import './App.css';
import { ColorExtractor } from 'react-color-extractor'

function App() {

  const image = 'https://cors-anywhere.herokuapp.com/https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_1280.jpg';

  return (
    <div className="App">
        <ColorExtractor getColors={colors => console.log(colors)}>
          <img crossOrigin="anonymous" src={image} alt="flower" style={{maxWidth: '100%'}}/>
        </ColorExtractor>

        <p>Color Palette in Console</p>
    </div>
  );
}

export default App;
