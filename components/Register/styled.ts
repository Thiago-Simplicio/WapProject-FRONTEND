import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;

  form {
    width: 650px;
    height: 590px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    background-color: white;
    animation: anima 0.1s forwards cubic-bezier(0.39, 0.575, 0.565, 3);

    .field {
      width: 100%;

      input {
        width: 100%;
        height: 50px;
        padding: 7px;
        outline: 0;
        border: 1px solid rgba(0, 0, 0, 0.4);
        font-family: sans-serif;
        font-size: 17px;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      }
    }

    .button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;

      Button {
        background: linear-gradient(to left, #024183, #248dfb);
        width: 60%;
        font-family: sans-serif;
        transition: all 0.3s ease;
        text-transform: none;
        color: white;
        font-weight: bold;
        height: 50px;
        font-size: 21px;
        border-radius: 30px;
      }

      Button:hover {
        opacity: 0.5;
      }

      .singUp {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;

        span {
          font-family: sans-serif;
          color: rgba(0, 0, 0, 0.7);
          font-size: 14px;

          label {
            color: #4168ff;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          label:hover {
            opacity: 0.5;
          }
        }
      }
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  position: relative;

  h1 {
    font-family: sans-serif;
  }

  .back {
    position: absolute;
    left: 1%;
    top: -10%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    .icon {
      color: #db1041;
      font-size: 31px;
      transition: all 0.3s ease;
    }

    span {
      display: none;
    }

    :hover span {
      opacity: 0.8;
      display: flex;
      color: #db1041;
      font-family: sans-serif;
      font-weight: bold;
    }

    :hover .icon {
      opacity: 0.8;
    }
  }
`;
