import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";


// import {  } from "react-router-dom";
import {
  BrowserRouter,
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Header/HeaderContaint/Home.jsx";
import About from "./Components/Header/HeaderContaint/About.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='home' element={<Home/>}></Route>
      <Route path="about" element={<About/>}/>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
