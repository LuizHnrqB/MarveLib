import React from "react";
import character from "../src/data/character.json";
import movies from "../src/data/movies.json";
import { ItemsCarousel } from "./components/carousel/index";
import { GlobalStyle, BackApp, Content } from "./styles";
import { NavBar } from "./components/navBar";

function App() {
  let tipo1: string = "filme";
  let tipo2: string = "personagem";
  let tipo3: string = "hqs";

  return (
    <div className="App">
      <BackApp>
        <NavBar></NavBar>
        <GlobalStyle />
        <Content>
          <ItemsCarousel data={character} />
        </Content>
      </BackApp>
    </div>
  );
}

export default App;
