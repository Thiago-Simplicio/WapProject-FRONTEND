import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: white;
  gap: 25px;
`;

export const DashBoard = styled.div`
  width: 98%;
  height: 850px;
  border-radius: 10px;
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }
`;

export const Button = styled.div`
  width: 100%;
  position: absolute;
  bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  Button {
    background-color: #517afe;
    padding: 5px;
    width: 15%;
    height: 45px;
    border-radius: 15px;
    color: white;
    font-family: sans-serif;
    font-weight: bold;
  }

  Button:hover {
    color: #517afe;
  }
`;
