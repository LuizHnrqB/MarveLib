import styled from "styled-components";
import backgroundImage from "../../assets/fundo.png";

interface ContainerProps {
  showLogin: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.showLogin ? "#f0f0f0" : "black")};
  transition: background-color 0.5s ease-in-out;
`;

interface LoginBoxProps {
  showLogin: boolean;
}

export const ErrorMessage = styled.p`
  font-family: "AxiformaLight";
  font-weight: normal;
  color: red;
  font-size: 12px;
`;
export const Marvel = styled.div`
  width: 250px;
  height: 120px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MarvelP = styled.p`
  font-family: "MarvelRegular";
  font-size: 120px;
  color: white;
  text-align: center;
  position: relative;
  padding: 0;
  margin: 0;
`;
export const Marvel2 = styled.div`
  width: 237px;
  height: 95px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MarvelP2 = styled.p`
  font-family: "MarvelRegular";
  font-size: 100px;
  color: white;
  text-align: center;
  position: relative;
  padding: 0;
  margin: 0;
  margin-top: 20px;
`;
export const WelcomeBack = styled.h3`
  font-size: 30px;
  color: red;
  font-family: "AxiformaBold";
  font-weight: bold;
  margin-bottom: -10px;
`;
export const Access = styled.p`
  margin-top: 10px;
  color: rgba(132, 132, 141);
  font-size: 20px;
  font-family: "AxiformaLight";
  font-weight: normal;
  position: relative;
  display: flex;
  align-self: flex-start;
`;
export const Inputs = styled.input`
  border: 0;
  font-size: 20px;
  font-family: "AxiformaLight";
  font-weight: normal;
  border-radius: 100px;
  display: flex;
  align-self: flex-start;
  margin-bottom: 10px;
  width: 100%;
  height: 10%;
  padding: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: "AxiformaLight";
    font-weight: normal;
    color: red;
  }
  :-ms-input-placeholder {
    font-family: "AxiformaLight";
    font-weight: normal;
    color: red;
  }
`;
export const Options = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  font-family: "AxiformaMedium";
  justify-content: space-between;
  font-size: 15px;
  color: rgba(132, 132, 141);
`;

export const Options1 = styled.button`
  font-size: 15px;
  color: rgba(132, 132, 141);
  background: transparent;
  font-family: "AxiformaMedium";
  border: 0;
  display: flex;
  flex-direction: row;
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  border-radius: 20px;
  margin-right: 5px;
`;
export const Options2 = styled.button`
  z-index: 5;
  font-size: 15px;
  color: rgba(132, 132, 141);
  font-family: "AxiformaMedium";
  background: transparent;
  border: 0;
  display: flex;
  flex-direction: row;
  padding-bottom: 2px;
  cursor: pointer;
  border-bottom: solid red 1px;
`;
export const Cadastro = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  font-family: "AxiformaMedium";
  font-size: 15px;
  color: rgba(132, 132, 141);
`;
export const CadastroP1 = styled.p`
  color: rgba(132, 132, 141);
  font-size: 16px;
  margin-right: 0;
`;
export const CadastroP2 = styled.button`
  margin-top: 8%;
  align-self: center;
  border: 0;
  background-color: transparent;
  color: red;
  font-size: 18px;
  margin-left: 5px;
  cursor: pointer;
`;
export const LoginButton = styled.button`
  font-size: 20px;
  font-family: "AxiformaMedium";
  font-size: 28px;
  font-weight: normal;
  border-radius: 100px;
  background-color: red;
  color: white;
  border: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 15%;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: darkred;
  }
`;
export const LoginBox = styled.div<LoginBoxProps>`
  width: 18.5%;
  height: 60%;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  left: 10%;
  top: 20%;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  @media (max-width: 800px) {
    width: 80%;
    background-color: transparent;
  }
`;
export const Background = styled.body`
  z-index: 2;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0.5) 60%,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1) 80%,
      rgba(0, 0, 0, 0) 90%
    ),
    url(${backgroundImage});
  background-size: auto 100%;
  background-position: right center;
  background-repeat: no-repeat;
  overflow: hidden;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
`;
