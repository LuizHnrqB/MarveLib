import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemsCarousel } from "./components/carousel";
import character from "../src/data/character.json";
import movies from "../src/data/movies.json";
import hq from "../src/data/hq.json";
import { GlobalStyle, BackApp, Content } from "./styles";

import { Login } from "./components/login";

export function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedIsLoggedIn === "true");
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShowLogin(true);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {showLogin && (
        <Router>
          <BackApp>
            <GlobalStyle />
            <Content>
              <Routes>
                <Route
                  path="/"
                  element={
                    isLoggedIn ? <ItemsCarousel data={character} /> : <Login />
                  }
                />
                <Route
                  path="/character"
                  element={
                    isLoggedIn ? <ItemsCarousel data={character} /> : <Login />
                  }
                />
                <Route
                  path="/movies"
                  element={
                    isLoggedIn ? <ItemsCarousel data={movies} /> : <Login />
                  }
                />
                <Route
                  path="/hq"
                  element={isLoggedIn ? <ItemsCarousel data={hq} /> : <Login />}
                />
              </Routes>
            </Content>
          </BackApp>
        </Router>
      )}
    </div>
  );
}
