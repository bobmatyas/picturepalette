This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


This is a re-write of my final project from the Grand Circus Front End Web Development bootcamp. The initial version of [PicturePalette](https://github.com/bobmatyas/gc-final-project) was written using [AnguarJS](https://www.angularjs.org). 

I re-wrote the project in ReactJS to gain experience with ReactJS and also to experience the process of refactoring a project using a legacy framework.


## Improvements over Initial Version

### APIs

- The initial version of the project depended on a third party API to generate the color schemes. In this version I made use of a React library to generate the palettes and eliminated the reliance on a second API. 


### Code Improvements 

- Moved to component-based CSS instead of global CSS
- Utilized modern CSS including Grid, CSS Custom Properties, and CSS-in-JS (Styled Components)
- Made better use of component-based architecture
- Implemented different header background that didn't rely on painting dozens of empty DIVs


### Accessibility

- Added ability to navigate via keyboard
- Improved color contrast on homepage buttons
- Proper semantic elements used 
- Added ALT tags to card images
- Improved color contrast on buttons throughout site



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
