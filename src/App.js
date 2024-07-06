import logo from "./Image119.jpg";
import "./App.css";
import { Form } from "react-router-dom";
import { Route , Switch} from "react-router-dom";
// import {  } from "react-router-dom";
import About from "./Components/Header/HeaderContaint/About";
import Home from "./Components/Header/HeaderContaint/Home";

function App() {
  return (
    <>
      {/* <Switch>
        <Route exact path="/" Component={About}></Route>
        <Route path="/" Component={Home}></Route>
      </Switch> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
