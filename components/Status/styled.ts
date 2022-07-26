import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20%;
  animation: status 0.3s ease;

  @keyframes status {
    0% {
      transform: translateY(550px);
    }
    100% {
      transform: translateY(1);
    }
  }
`;
