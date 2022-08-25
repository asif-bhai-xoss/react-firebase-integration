/*

1. First create react app:

npx create-react-app .

----------------------------------------------------------------------
2. Then install react bootstrap

npm install react-bootstrap bootstrap

i) then copy the following and paste it into index.js and app.js:

import 'bootstrap/dist/css/bootstrap.min.css';

-----------------------------------------------------------------------
3. Install react router:

npm install react-router-dom@6

i) Then paste the following into index.js:

import { BrowserRouter } from "react-router-dom";

<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</React.StrictMode>

ii) import the following into app.js:

import { Routes, Route, Link } from "react-router-dom";

-----------------------------------------------------------------------
4. Install firebase:

npm install firebase

i) Create a file named: "firebase.init.js" and exports app.

ii) Then go to the website: "https://github.com/CSFrequency/react-firebase-hooks" and intall react firebase hooks:

npm install --save react-firebase-hooks

ii) Finally, using this lines, u can get current user.

import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(app);
const [user] = useAuthState(auth);

-----------------------------------------------------------------------
5. To start the react project:

npm start

-----------------------------------------------------------------------
6. To build the react project:

npm run build

-----------------------------------------------------------------------
*/