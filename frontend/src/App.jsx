import React, { useState } from "react";
import Cookies from "js-cookie";
import Axios from "axios";

import NavBar from "./NavBar";
import Content from "./Content";

import "./App.css";

const App = () => {
  function checkLoggedIn() {
    return (
      Cookies.get("email") !== undefined &&
      Cookies.get("Authorization") !== undefined &&
      Cookies.get("refresh_token") !== undefined
    );
  }

  const [loggedIn, setLoggedIn] = useState(checkLoggedIn());

  function handleLogin(email, access_token, refresh_token) {
    const { common } = Axios.defaults.headers;

    Cookies.set("email", email);
    Cookies.set("Authorization", "Bearer " + access_token);
    Cookies.set("refresh_token", refresh_token);

    common["email"] = email;
    common["Authorization"] = "Bearer " + access_token;
    common["refresh_token"] = refresh_token;

    setLoggedIn(true);
  }

  function handleLogout() {
    const { common } = Axios.defaults.headers;

    Cookies.remove("email");
    Cookies.remove("Authorization");
    Cookies.remove("refresh_token");

    delete common["email"];
    delete common["Authorization"];
    delete common["refresh_token"];

    setLoggedIn(false);
    window.location.replace("/");
  }

  return (
    <div className="app">
      <NavBar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Content loggedIn={loggedIn} handleLogin={handleLogin} />
    </div>
  );
};

export default App;
