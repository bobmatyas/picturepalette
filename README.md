# PicturePalette 

PicturePalette allows creatives to search quality, free stock photography by color - a rarity in the marketing world. This curative app is perfect for creatives looking for photography that compliments their brand colors.

View online:

[https://picturepalette2.netlify.app/](https://picturepalette2.netlify.app/)

## Refactor

This is a re-write of my final project from the Grand Circus Front End Web Development bootcamp. The initial version of [PicturePalette](https://github.com/bobmatyas/gc-final-project) was written using [AnguarJS](https://www.angularjs.org). 

This version is re-written in [ReactJS](https://www.reactjs.org) to experience the process of refactoring a project using a legacy framework.


## Improvements over Initial Version

### APIs

- The initial version of the project depended on a third party API to generate the color schemes. In this version I used a React library to generate the palettes and eliminated the reliance on a second API. 

### Code Improvements 

- Moved to component-based CSS instead of global CSS
- Utilized modern CSS including Grid, CSS Custom Properties, and CSS-in-JS (Styled Components)
- Made better use of component-based architecture
- Utilized PropTypes library for basic type checking
- Implemented different header background that didn't rely on painting dozens of empty DIVs
- Stored favorited palettes in localStorage to persist across sessions rather than as a JS variable
- Used SVG icons to prevent loading entirety of Material Design icon library

### Accessibility

- Added ability to navigate via keyboard
- Improved color contrast on homepage buttons
- Proper semantic elements used 
- Added ALT tags to card images
- Improved color contrast on buttons throughout site


## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To install run:

`npm install`

Register for a Pixabay API account and set it as an environmental variable in the form of:

`REACT_APP_PIXABAY=1234259848`

Run using:

`npm start`
