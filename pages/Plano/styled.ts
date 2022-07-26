import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ContainerPlano = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: sans-serif;
    color: #499f1f;
  }
`;

export const Order = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;

  span {
    font-size: 25px;
    font-family: sans-serif;
    color: rgba(0, 0, 0, 0.6);
  }

  .container-order {
    width: 100%;
    height: 450px;
    background-color: #ebebeb;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);

    .plano {
      display: flex;
      flex-direction: column;
      gap: 30px;

      label {
        margin-left: 20px;
        display: flex;
        gap: 10px;
        align-items: center;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.7);

        span {
          font-family: sans-serif;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }

    .user {
      display: flex;
      flex-direction: column;
      gap: 30px;

      label {
        margin-left: 20px;
        display: flex;
        gap: 10px;
        align-items: center;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.7);

        span {
          font-family: sans-serif;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
`;
