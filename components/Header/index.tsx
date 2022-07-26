import Link from "next/link";

import { FiLogOut } from "react-icons/fi";
import { idUser } from "../../services/useUserStorage";
import * as Styled from "./styled";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { FaUserCircle } from "react-icons/fa";
import CircularProgress from "@material-ui/core/CircularProgress";

interface User {
  name_user: string | any;
}
[];

const Header = () => {
  const [user, setUser] = useState<User>([] as any);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getUser = async () => {
      const { status, data: User } = await api.get(`/get/${idUser}`);
      setUser({
        name_user: User?.user?.name_user,
      });
    };
    getUser();
  }, [setUser]);
  return (
    <Styled.Container>
      <Styled.Perfil>
        <div className="circle">
          <FaUserCircle />
        </div>
        <div className="info">
          <span>
            Bem vindo,
            <br /> <label>{user?.name_user}</label>
          </span>
        </div>
      </Styled.Perfil>
      <Styled.Nav>
        <Link href={"/Home"}>
          <a>Ver Planos</a>
        </Link>
      </Styled.Nav>
      <Styled.Logout>
        <Link href={"/Login"}>
          <a
            onClick={() => {
              setLoading(true);
              window.localStorage.clear();
            }}
          >
            {loading === true ? (
              <CircularProgress color="error" />
            ) : (
              <FiLogOut className="icon" />
            )}
          </a>
        </Link>
      </Styled.Logout>
    </Styled.Container>
  );
};

export default Header;
