import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./styles";
import userData from "../../data/usersMock.json";
import { CadastroModal } from "../modalAuth";

export function Login() {
  const placeholderStyle = {
    fontFamily: "AxiformaLight",
    fontWeight: "normal",
    color: "rgba(132, 132, 141)",
  };
  interface User {
    username: string;
    password: string;
  }
  const openCadastroModal = (tipo: number) => {
    console.log("era pra ter aberto", tipo);
    setcadastroTipo(tipo);
    setShowCadastroModal(true);
  };
  const closeCadastroModal = () => {
    setShowCadastroModal(false);
  };

  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [cadastroTipo, setcadastroTipo] = useState(1);
  const [showCadastroModal, setShowCadastroModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedKeepLoggedIn = localStorage.getItem("keepLoggedIn") === "true";
    setKeepLoggedIn(storedKeepLoggedIn);
  }, []);

  const handleLogin = () => {
    const storedUserString = localStorage.getItem("User");

    if (storedUserString) {
      const storedUser = JSON.parse(storedUserString);

      if (storedUser.usuario === username && storedUser.senha === password) {
        localStorage.setItem("isLoggedIn", "true");
        if (keepLoggedIn) {
          localStorage.setItem("keepLoggedIn", "true");
        }
        navigate("/character");
        window.location.reload();
      } else {
        setLoginError(true);
        setTimeout(() => {
          setLoginError(false);
        }, 2000);
      }
    } else {
      setLoginError(true);
      setTimeout(() => {
        setLoginError(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const storedKeepLoggedIn = localStorage.getItem("keepLoggedIn") === "true";
    setKeepLoggedIn(storedKeepLoggedIn);

    setTimeout(() => {
      setShowLogin(true);
    }, 1500);
  }, []);

  return (
    <styles.Container showLogin={showLogin}>
      <styles.Marvel>
        <styles.MarvelP>MARVEL</styles.MarvelP>
      </styles.Marvel>
      {showLogin ? (
        <styles.Background>
          <styles.LoginBox showLogin={showLogin}>
            <styles.Marvel2>
              <styles.MarvelP2>MARVEL</styles.MarvelP2>
            </styles.Marvel2>
            <styles.WelcomeBack>Bem-vindo(a) de volta!</styles.WelcomeBack>
            <styles.Access>Acesse sua Conta:</styles.Access>
            <styles.Inputs
              placeholder="Usuário"
              style={placeholderStyle}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></styles.Inputs>
            <styles.Inputs
              placeholder="Senha"
              type="password"
              style={{
                ...placeholderStyle,
                border: loginError ? "1px solid red" : "1px solid #D9D9D9",
              }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setLoginError(false);
              }}
            ></styles.Inputs>

            {loginError && (
              <styles.ErrorMessage>Credenciais Incorretas</styles.ErrorMessage>
            )}

            <styles.Options>
              <styles.Options1>
                <styles.Checkbox
                  checked={keepLoggedIn}
                  onChange={() => setKeepLoggedIn(!keepLoggedIn)}
                />
                Salvar Login
              </styles.Options1>
              <styles.Options2 onClick={() => openCadastroModal(2)}>
                Esqueci a senha
              </styles.Options2>
            </styles.Options>
            <styles.LoginButton onClick={handleLogin}>
              Entrar
            </styles.LoginButton>
            <styles.Cadastro>
              <styles.CadastroP1>Ainda não tem o Login?</styles.CadastroP1>
              <styles.CadastroP2 onClick={() => openCadastroModal(1)}>
                Cadastre-se
              </styles.CadastroP2>
            </styles.Cadastro>
          </styles.LoginBox>
          <CadastroModal
            isOpen={showCadastroModal}
            onClose={closeCadastroModal}
            tipo={cadastroTipo}
          />
        </styles.Background>
      ) : null}
    </styles.Container>
  );
}
