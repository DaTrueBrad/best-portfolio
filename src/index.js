import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import { themeOptions } from "./themeOptions";
import { BrowserRouter } from "react-router-dom";
import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp({
  apiKey: "AIzaSyA5Ob5i2DaizTlAwbdn00rWl8iZZ7Yvuzg",
  authDomain: "portfolio-7a1b5.firebaseapp.com",
  projectId: "portfolio-7a1b5",
  storageBucket: "portfolio-7a1b5.appspot.com",
  messagingSenderId: "319732382959",
  appId: "1:319732382959:web:0546246bf707d03c79ef1a",
  measurementId: "G-XTYET23CZ3"
});
const analytics = getAnalytics(app);



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeOptions}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
