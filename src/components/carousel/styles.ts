import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 500px;
  max-width: 500px;
  justify-content: center;
  align-content: center;
  width: fit-content;
  display: flex;
  flex-direction: column;
  font-family: "MarvelRegular";
`;

export const Image = styled.img`
  position: absolute;
  z-index: 1;
  width: 75%;
  height: 100%;
  border-radius: 30px;
`;

export const InnerTitle = styled.h3`
  color: white;
  margin: 0px -20px;
  font-size: 20px;
  font-family: "AxiformaBold";
  font-weight: bold;
  text-align: center;
`;

export const paragraph = styled.p`
  color: white;
  font-size: 12px;
  font-family: "AxiformaThin";
  font-weight: normal;
`;

export const button = styled.button`
  color: white;
  font-family: "AxiformaThin";
  font-weight: normal;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 20px;
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
`;
