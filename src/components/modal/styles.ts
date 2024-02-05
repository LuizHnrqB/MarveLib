import styled from "styled-components";

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  @media (max-width: 800px) {
    background: transparent;
    border-radius: 30px;
  }
`;
export const ModalTitle = styled.h3`
  font-family: "AxiformaBold";
  padding-left: 30px;
  color: white;
  font-size: 30px;
  margin-bottom: 5px;
  text-align: start;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 800px) {
    position: relative;
    z-index: 3;
    color: white;
  }
`;
export const AvaibleContainer = styled.div`
  margin-top: -5%;
  @media (max-width: 800px) {
    position: relative;
    z-index: 3;
    color: black;
    display: flex;
    flex-direction: row;
  }
`;
export const Avaible = styled.h4`
  font-family: "AxiformaMedium";
  font-weight: 400;
  font-size: 12px;
  color: white;
  @media (max-width: 800px) {
    z-index: 3;
    color: white;
    margin-top: 30px;
  }
`;
export const AvaibleLinks = styled.img`
  width: 49px;
  margin-right: 6%;
  height: 49px;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 800px) {
    width: 30px;
    height: 30px;
    z-index: 3;
    color: black;
    margin-top: 20px;
    margin-left: 10px;
  }
`;
export const MovieList = styled.p`
  font-family: "AxiformaThin";
  color: white;
  font-size: 18px;
  margin: 0px;
  margin-top: -10px;
  @media (max-width: 800px) {
    position: relative;
    z-index: 3;
    color: white;
    font-family: "AxiformaMedium";
    font-weight: 400;
  }
`;

export const Rating = styled.img`
  margin-top: -6%;
  width: 200px;
  @media (max-width: 800px) {
    position: relative;
    z-index: 3;
    position: relative;
    left: 10%;
  }
`;
export const Avaliacao = styled.h4`
  font-family: "AxiformaBold";
  color: white;
  font-size: 18px;
  margin-top: 0;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    color: white;
    position: relative;
    left: 10%;
    z-index: 3;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 750px;
  height: 510px;
  overflow: hidden;
  border-radius: 30px;
  @media (max-width: 800px) {
    background: transparent;
  }
`;

export const CloseIcon = styled.img`
  width: 40px;
  @media (max-width: 800px) {
    position: relative;
    left: 50%;
    z-index: 3;
  }
`;

export const DetailImageContainer = styled.div`
  background-color: red;
  width: 55%;
  height: 100%;
  @media (max-width: 800px) {
    position: fixed;
    background-color: transparent;
    height: 56vh;
    top: 0;
    left: 169px;
    z-index: 2;
  }
`;

export const DetailImage = styled.img`
  border-radius: 30px;
  width: 100%;
  height: 100%;
  @media (max-width: 800px) {
    border-radius: 30px;
    width: 100%;
    left: 0;
  }
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 90%;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
  background: none;
  border: none;
  @media (max-width: 800px) {
    z-index: 10;
    position: fixed;
    right: 26%;
    top: 5%;
  }
`;

export const Column = styled.div`
  width: 57%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to left, red, black);
  @media (max-width: 800px) {
    z-index: 4;
    width: 412px;
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(100, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    );
    height: 56vh;
    top: 0;
    left: 169px;
    border-radius: 30px;
    align-items: flex-start;
  }
`;
