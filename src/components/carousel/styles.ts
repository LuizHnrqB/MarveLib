import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 500px;
  max-width: 500px;
  position: relative;
  margin-top: 50%;
  justify-content: center;
  align-content: center;
  width: fit-content;
  display: flex;
  flex-direction: column;
  font-family: "MarvelRegular";
  @media (max-width: 1440px) {
    height: 500px;
    max-width: 600px;
  }
  @media (max-width: 800px) {
    height: 500px;
    max-width: 600px;
    margin-top: 300px;
  }
`;

export const Image = styled.img`
  position: absolute;
  z-index: 1;
  width: 75%;
  height: 100%;
  border-radius: 30px;
  @media (max-width: 1440px) {
    width: 80%;
    margin-top: -100px;
  }
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 0;
  }
`;
export const NavBar = styled.header`
  position: fixed;
  top: 10%;
  margin-top: 0px;
`;
export const InnerTitle = styled.h3`
  color: white;
  margin: 0px -20px;
  font-size: 20px;
  font-family: "AxiformaBold";
  font-weight: bold;
  text-align: center;
  @media (max-width: 800px) {
    margin-top: -10px;
    margin-bottom: 10px;
  }
`;

export const paragraph = styled.p`
  color: white;
  font-size: 12px;
  font-family: "AxiformaThin";
  font-weight: normal;
  @media (max-width: 800px) {
    font-size: 10px;
    margin-top: -10px;
  }
`;

export const Button = styled.button`
  color: white;
  font-family: "AxiformaThin";
  font-size: 20px;
  font-weight: normal;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  @media (max-width: 800px) {
    font-size: 16px;
    width: 100%;
    top: 95%;
  }
`;

export const InnerDiv = styled.div`
  border-radius: 30px;
  position: absolute;
  padding: 24px;
  z-index: 2;
  width: 75%;
  height: 40%;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 1),
    rgba(255, 0, 0, 0.4)
  );
  box-sizing: border-box;
  @media (max-width: 1440px) {
    width: 80%;
    top: 40%;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 50%;
    top: 50%;
  }
`;
