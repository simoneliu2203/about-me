# simoneliu-net

# Set up React: Using TypeScript

1. Install NodeJS from https://nodejs.org/en/
2. Run `npx create-react-app simoneliu-net`
3. Go to the project folder `cd simoneliu-net`
4. Install TypeScript `snpm install typescript --save-dev`
5. Install types `npm install --save typescript @types/node @types/react-dom @types/jest`
6. Rename the App.js and index.js to tsx extension
7. Run `npm start`, this will create the tsconfig.json
8. Install styles loader `npm i sass sass-loader style-loader`
9. In *script* in package.json, add ```"sass": "npx sass src/styles/input.scss src/assets/styles/ui.css"```
10. Update ```"start": "npm run sass && react-scripts start"```
11. Import styles from assets/styles folder to `index.tsx`