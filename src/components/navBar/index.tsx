import React from "react";
import * as styles from "./styles";

export function NavBar(): any {
  return (
    <styles.NavBar>
      <styles.Marvel>
        <styles.MarvelP>MARVEL</styles.MarvelP>
      </styles.Marvel>
      <styles.Routes>
        <styles.RoutesButton>Personagens</styles.RoutesButton>
        <styles.RoutesButton>Filmes</styles.RoutesButton>
        <styles.RoutesButton>HQs</styles.RoutesButton>
      </styles.Routes>
    </styles.NavBar>
  );
}
