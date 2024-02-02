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
`;
export const ModalTitle = styled.h3`
  font-family: "AxiformaBold";
  color: white;
  font-size: 30px;
  margin-bottom: 5px;
`;
export const MovieList = styled.p`
  font-family: "AxiformaThin";
  color: white;
  font-size: 18px;
  margin: 0px;
`;

export const Rating = styled.img`
  width: 200px;
`;
export const Avaliacao = styled.h4`
  font-family: "AxiformaBold";
  color: white;
  font-size: 18px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 700px;
  height: 500px;
  overflow: hidden;
  border-radius: 30px;
`;

export const CloseIcon = styled.img`
  width: 40px;
`;

export const DetailImageContainer = styled.div`
  background-color: red;
  width: 50%;
  height: 100%;
`;

export const DetailImage = styled.img`
  border-radius: 30px;
  width: 100%;
  height: 100%;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
  background: none;
  border: none;
`;

export const Column = styled.div`
  width: 57%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to left, red, black);
`;
