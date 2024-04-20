
import React from "react";
//import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createRoot } from 'react-dom/client';


//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
//ReactDOM.render(<App />, document.querySelector("#root"));


createRoot(document.getElementById('root')).render(<App />);

