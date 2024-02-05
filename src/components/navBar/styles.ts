import styled from "styled-components";

export const NavBar = styled.div`
  width: 100vw;
  background-color: black;
  height: 57px;
  box-shadow: 0 4px 8px rgba(255, 0, 0, 0.5);
  z-index: 10;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  top: 0;
`;

export const Marvel = styled.div`
  border: 0;
  width: 122px;
  height: 54px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1%;
  @media (max-width: 800px) {
    width: 68px;
    height: 28px;
  }
`;

export const MarvelP = styled.p`
  font-family: "MarvelRegular";
  font-size: 60px;
  color: white;
  top: 10%;
  position: relative;
  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

export const Avatar = styled.img`
  border-radius: 200px;
  width: 55px;
  height: 55px;
  margin-right: 5px;
  @media (max-width: 800px) {
    width: 27px;
    height: 27px;
  }
`;
export const AvatarP = styled.p`
  font-family: "AxiformaLight";
  font-size: 20px;
  color: rgba(229, 229, 234);
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

export const Logoff = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 25px;
  @media (max-width: 800px) {
  }
`;

export const Routes = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 60%;
  @media (max-width: 800px) {
    position: relative;
    top: -15%;
  }
`;

export const RoutesButton = styled.button`
  cursor: pointer;
  font-family: "AxiformaBold";
  font-size: 30px;
  color: white;
  background-color: transparent;
  border: 0;

  @media (max-width: 800px) {
    position: relative;
    top: 20px;
    font-size: 15px;
  }
`;
