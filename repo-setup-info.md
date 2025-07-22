To correctly set up the repo with webpack, you need the following:

0) create a .gitignore file
1) run the following command: '$ npm init -y'
2) configure package.json file to include all necessary dependencies (explanation down below, because comments are not allowed in json files). Dependencies can be added by running one of the following commands (depending on whether they're dev or production):
 $ npm install --save {dependency}
 $ npm install --save-dev {dependency}
3) create src folder with all source files (index.js, template.html, styles.css, etc.)
4) create a webpack.config.js file and configure
5) import necessary modules and files in index.js module
6) run: $ npx webpack serve (sometimes you need to run 'npx webpack' first)

When you're ready to deploy with github pages, run the following commands:
0) $ git branch gh-pages (you only have to do this once, to create a deploy branch)
1) make sure all you work is committed to the main branch (you can check with 'git status')
2) $ git checkout gh-pages && git merge main --no-edit
3) $ npx webpack
4) $ git add dist -f && git commit -m "Deployment commit"
   $ git subtree push --prefix dist origin gh-pages
   $ git checkout main
5) change the source branch for GitHub Pages to the gh-pages branch

==================================================================================

package.json explanation (the package.json file below includes many dependencies, not all might be needed for each project):

{
  "name": "webpack-practice-2",
  "version": "1.0.0",
  "private": true, // "main": "index.js" was removed and "private": true was added, to ensure the website is not accidentally publically published
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "css-loader": "^7.1.2", // to process css files into a string
    "csv-loader": "^3.0.5", // to process  csv files
    "html-webpack-plugin": "^5.6.3", // to process html files
    "json5": "^2.2.3", // to process json5 data files
    "style-loader": "^4.0.0", // to load the styles from the previously generated css string
    "toml": "^3.0.0", // to process toml data files
    "webpack": "^5.100.2", // webpack
    "webpack-cli": "^6.0.1", // webpack command line interface
    "webpack-dev-server": "^5.2.2", // after the command 'npx webpack serve' is run, 'npx webpack' will be run automatically anytime a webpack tracked file is changed
    "xml-loader": "^1.2.1", // to process xml files
    "yamljs": "^0.3.0" // to process yamljs data files
  },
  "dependencies": {
    "lodash": "^4.17.21" // to get lodash functionality in js modules
  }
}