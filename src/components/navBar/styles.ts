import styled from "styled-components";

export const NavBar = styled.div`
  width: 100vw;
  background-color: black;
  height: 114px;
  box-shadow: 0 4px 8px rgba(255, 0, 0, 0.5);
  z-index: 10;
  position: fixed;
  top: 0;
`;

export const Marvel = styled.div`
  border: 0;
  width: 122px;
  height: 54px;
  position: relative;
  top: 25%;
  left: 1%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MarvelP = styled.p`
  font-family: "MarvelRegular";
  font-size: 60px;
  color: white;
  top: 10%;
  position: relative;
`;

export const Routes = styled.div`
  position: relative;
  top: -50%;
  left: 1%;
  height: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
`;
export const RoutesButton = styled.button`
  font-family: "AxiformaBold";
  font-size: 30px;
  color: white;
  background-color: transparent;
  border: 0;
`;
