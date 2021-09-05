//import Router, { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
//import NavBar from "./NavBar"
import UserList from "./UserList";
//import NotFound from "./NotFound";
import "./styles.css"

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>User Liste</h1>
      </div>
      <UserList />
    </div>
  );
}

