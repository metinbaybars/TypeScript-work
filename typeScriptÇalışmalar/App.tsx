import React from "react";
import "./App.css";
import User from "./component/User";
import Navbar from "./component/Navbar";
import { type } from "@testing-library/user-event/dist/type";
import Switch from "./component/Switch";
import ReactDOM from "react-dom";
import Counter from "./component/Counter";
import AppClass from "./component/AppClass";
import FavoriteColor from "./component/Hook";

function App() {
  return (
    <div className="App">
      <h1 className="header"> REACT </h1>

      <User name="Baybars Arslan" departman="IT" salary="8000 TL" />
      <User name="Ali Kemal " departman="Industry" salary="5000 TL" />

      <Navbar title="" />
      <Counter />
      <AppClass />
      <FavoriteColor />
    </div>
  );
}
export default App;
