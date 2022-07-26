import { useState, useEffect } from "react";
import * as Styled from "./styled";
import { AiFillLeftCircle } from "react-icons/ai";
import { Button } from "@material-ui/core";
import api from "../../services/api";
import Status from "../Status/index";

const Register = ({ onClose = () => {} }) => {
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);

  const [name_user, setName] = useState<string>("");
  const [email_user, setEmail] = useState<string>("");

  return (
    <Styled.Container>
      <form>
        <Styled.Title>
          <h1>Cadastra-se</h1>
          <div
            className="back"
            onClick={() => {
              onClose();
            }}
          >
            <AiFillLeftCircle className="icon" />
            <span>Login</span>
          </div>
        </Styled.Title>
        <div className="field">
          <input
            placeholder="Nome"
            value={name_user}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="E-mail"
            value={email_user}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="button">
          <Button
            variant="text"
            onClick={async (e) => {
              e.preventDefault();
              const { status, data } = await api.post("/create", {
                name_user,
                email_user,
              });

              if (status === 200 && data?.status === 2) {
                setSuccess(true);
                setTimeout(() => {
                  setSuccess(false);
                }, 3000);
              }

              if (status >= 400) {
                setError(true);
              }

              if (data.status === 1) {
                setWarning(true);
                setTimeout(() => {
                  setWarning(false);
                }, 3000);
              }
            }}
          >
            Criar conta
          </Button>
        </div>
      </form>
      {error === true ? (
        <Status open={true} msg="Erro ao criar usuário" type="Error" />
      ) : null}
      {success === true ? (
        <Status open={true} msg="Usuário criado com sucesso" type="Success" />
      ) : null}
      {warning === true ? (
        <Status open={true} msg="E-mail já cadastrado!" type="Warning" />
      ) : null}
    </Styled.Container>
  );
};

export default Register;
