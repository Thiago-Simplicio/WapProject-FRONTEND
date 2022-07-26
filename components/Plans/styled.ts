import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  height: 750px;
  border-radius: 25px;
  box-shadow: 1px 2px 2px 3px rgba(0, 0, 0, 0.2);
  margin-top: 35px;
  display: flex;
  background-color: white;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;

  :nth-child(1) {
    animation: plano 1s forwards;
  }

  :nth-child(2) {
    animation: plano 1.5s forwards;
  }

  :nth-child(3) {
    animation: plano 1.8s forwards;
  }

  :hover {
    background-color: #1eabcc;
    color: white;
  }

  @keyframes plano {
    0% {
      transform: rotate(-5deg) translateY(650px);
      opacity: 0;
    }
    100% {
      transform: rotate(1) translateY(1);
      opacity: 1;
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 21px;
    font-family: sans-serif;
    letter-spacing: 2px;
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 30%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .price {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    span {
      font-family: sans-serif;
      font-size: 51px;
      font-weight: bold;
    }
  }

  .description {
    width: 80%;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    font-family: sans-serif;
    letter-spacing: 1px;
  }
`;

export const Button = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    background-color: #ee7326;
    color: white;
    width: 50%;
    padding: 7px;
    height: 50px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    :hover {
      background-color: white;
      color: #ee7326;
    }
  }
`;
