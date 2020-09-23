# Anglish Wordbook

## Description
Anglish is a version of English that avoids borrowed words from French, Latin and Greek in favor of Anglo-Saxon words and word roots, and sometimes revives old word roots that were pushed out of the language by those borrowings.  Enjoying the thought experiment but weary of trawling through spreadsheet-style word lists to search for Anglish words, I created a React app that makes the searching process more user-friendly, and also allows the adding, editing and deleting of words as they are found, changed or rejected.  Site lay out and style are Bootstrap-based, and I employed React Router DOM to enhance the user experience by generating separate pages for single words, the word lists and the create/update form.

## Screenshots
The home page explains the thought behind Anglish:
![Home page](https://raw.githubusercontent.com/jthielman/anglish-wordbook/master/screenshots/anglish-wordbook-home.png)

The Words page lists words:
![Words page](https://raw.githubusercontent.com/jthielman/anglish-wordbook/master/screenshots/anglish-wordbook-words.png)

And each word has a page to show its details:
![One word page](https://raw.githubusercontent.com/jthielman/anglish-wordbook/master/screenshots/anglish-wordbook-one-word.png)

Here's the form by which a user enters info for a new word:
![New word form](https://raw.githubusercontent.com/jthielman/anglish-wordbook/master/screenshots/anglish-wordbook-form.png)

## Technologies used:
HTML, SCSS, JavaScript, Version Control with Github, Webpack, React ...

## How to Run
- Clone down this project
- At the root of the project run the following command: `npm install`
- You will need to set up a firebase project with a realtime database and add the api keys of that database to a file in this project called `src/helpers/apiKeys.json`, using the example of `src/helpers/apiKeys.example.json`.
- Then run this command: `npm start`
- A window or tab should automatically open in your browser.

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
