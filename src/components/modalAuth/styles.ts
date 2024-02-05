import styled from "styled-components";

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: black;
  padding: 20px;
  border-radius: 5px;
  max-width: 600px;
  width: 100%;
  text-align: center;
  border-radius: 30px;
  background: linear-gradient(to right, black, red, black);
`;

export const CloseButton = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
  right: 0;
  top: 0;
  cursor: pointer;
  float: right;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InnerTitle = styled.h2`
  font-family: "AxiformaBold";
  color: white;
  font-size: 30px;
`;
export const Inputs = styled.input`
  border: 0;
  font-size: 20px;
  font-family: "AxiformaLight";
  font-weight: normal;
  border-radius: 100px;
  position: relative;
  left: 0%;
  margin-bottom: 10px;
  width: 80%;
  height: 10%;
  padding: 10px;
`;
export const Description = styled.p`
  font-size: 20px;
  font-family: "AxiformaLight";
  font-weight: normal;
  color: white;
`;
export const Confirmation = styled.p`
  font-size: 15px;
  font-family: "AxiformaLight";
  font-weight: normal;
  color: white;
`;
export const Envio = styled.button`
  cursor: pointer;
  background-color: white;
  border-radius: 30px;
  font-family: "AxiformaMedium";
  color: white;
  font-size: 20px;
  font-weight: normal;
  border: 0;
  height: 50px;
  position: relative;
  width: 91px;
  margin-top: 0px;
  background-color: red;
  left: 69%;
  &:hover {
    background: darkred;
  }
`;
