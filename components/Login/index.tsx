import { useState } from "react";
import * as Styled from "./styled";
import { CircularProgress } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Register from "../Register/index";
import api from "../../services/api";
import Status from "../Status";
import { FcLink } from "react-icons/fc";

import {
  setNameUser,
  setEmailUser,
  setIdUser,
} from "../../services/useUserStorage";

interface wrapperProps {
  type: boolean;
}

const Wrapper = (props: wrapperProps) => {
  const [register, setRegister] = useState<boolean>(false);
  const [email_user, setEmail] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);

  return (
    <Styled.Container>
      <form>
        <Styled.Title>
          <span>Bem vindo!</span>
          <FcLink className="icons" />
        </Styled.Title>
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
              setLoading(true);
              const { status, data } = await api.post("/login", {
                email_user,
              });
              if (status === 200 && data?.status === 2) {
                setNameUser(data?.user_name);
                setIdUser(data?.id);
                setEmailUser(data?.user_email);
                setLoading(false);
                window.location.href = "/Home";
              } else if (data?.status === 1) {
                setErr(true);
                setTimeout(() => {
                  setErr(false);
                }, 3000);
              }
              setTimeout(() => {
                setLoading(false);
              }, 1000);
            }}
          >
            {loading === true ? <CircularProgress color="inherit" /> : "Entrar"}
          </Button>
          <div className="singUp">
            <span>
              Não tem uma conta?{" "}
              <label onClick={() => setRegister(true)}>Crie aqui!</label>
            </span>
          </div>
        </div>
      </form>
      {register === true ? (
        <Register onClose={() => setRegister(false)} />
      ) : null}
      {err === true ? (
        <Status
          open={true}
          type="Error"
          msg="Usuario não encontrado, cadastra-se!"
        />
      ) : null}
    </Styled.Container>
  );
};

export default Wrapper;
