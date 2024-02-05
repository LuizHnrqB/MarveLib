import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Fury from "../../assets/img/fury.png";
import * as styles from "./styles";

export function NavBar(): any {
  const navigate = useNavigate();
  const handleLogoff = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("keepLoggedIn", "false");
    window.location.reload();
  };
  return (
    <styles.NavBar>
      <styles.Marvel>
        <styles.MarvelP>MARVEL</styles.MarvelP>
      </styles.Marvel>
      <styles.Routes>
        <Link to="/character">
          <styles.RoutesButton>Personagens</styles.RoutesButton>
        </Link>
        <Link to="/movies">
          <styles.RoutesButton>Filmes</styles.RoutesButton>
        </Link>
        <Link to="/hq">
          <styles.RoutesButton>HQs</styles.RoutesButton>
        </Link>
      </styles.Routes>
      <styles.Logoff>
        <styles.Avatar src={Fury} />
        <Link to="/" onClick={handleLogoff}>
          <styles.AvatarP>Sair</styles.AvatarP>
        </Link>
      </styles.Logoff>
    </styles.NavBar>
  );
}
