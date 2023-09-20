import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

// FIREBASE CONFIGURATION
const firebaseConfig = {
  apiKey: "AIzaSyA0pFrUqt87LIse1omg9K3fgj22dCPcZtI",
  authDomain: "proyecto-react-c757f.firebaseapp.com",
  projectId: "proyecto-react-c757f",
  storageBucket: "proyecto-react-c757f.appspot.com",
  messagingSenderId: "591317635695",
  appId: "1:591317635695:web:2124d569602f66c40cb39a",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
