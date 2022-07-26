import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 50px;
  background-color: #fff;
  position: relative;
  top: 0;
  left: 0;
`;

export const Perfil = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  .circle {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.2);
    font-size: 61px;
  }

  .info {
    display: flex;
    flex-direction: column;

    span {
      color: rgba(0, 0, 0, 0.5);
      font-family: sans-serif;
      letter-spacing: 1px;

      label {
        color: rgba(0, 0, 0, 0.6);
        font-weight: bold;
        border-bottom: 1px solid rgba(0, 0, 0, 0.6);
      }
    }
  }
`;

export const Logout = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .icon {
    color: #d42f2f;
    font-size: 31px;
    opacity: 0.5;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .icon:hover {
    opacity: 0.8;
  }
`;

export const Nav = styled.ul`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  a {
    padding: 7px;
    color: rgba(0, 0, 0, 0.5);
    font-family: sans-serif;
    font-weight: bold;
    position: relative;
    transition: all 0.3s ease;
  }

  a:hover:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: 100%;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  a:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;
