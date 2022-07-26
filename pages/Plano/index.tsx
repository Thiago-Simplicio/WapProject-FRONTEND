import * as Styled from "./styled";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { idUser } from "../../services/useUserStorage";

interface OrderProps {
  plans_id: {
    name_plan: string | any;
    description_plan: string | any;
    value_plan: string | any;
  };
  subscribe_id: {
    name_user: string | any;
    email_user: string | any;
  };
}

const Plano = () => {
  const [order, setOrder] = useState<OrderProps>([] as any);

  useEffect(() => {
    const getPlan = async () => {
      const plano = localStorage.getItem("@Plan");
      const { status, data } = await api.get(`/get-order/${idUser}`);
      setOrder(data);
    };
    getPlan();
  }, []);

  return (
    <Styled.Container>
      <Header />
      <Styled.ContainerPlano>
        <Styled.Title>
          <h2>Pedido concluído!</h2>
        </Styled.Title>
        <Styled.Order>
          <span>Informações</span>
          <div className="container-order">
            <div className="plano">
              <span>Sobre o plano</span>
              <label>
                Plano contratado: <span>{order?.plans_id?.name_plan}</span>
              </label>
              <label>
                Valor do plano:{" "}
                <span>
                  {`R$${order?.plans_id?.value_plan}`}
                  <span>/mês</span>
                </span>
              </label>
            </div>
            <div className="user">
              <span>Seus dados</span>
              <label>
                Nome: <span>{order?.subscribe_id?.name_user}</span>
              </label>
              <label>
                Contato de email: <span>{order?.subscribe_id?.email_user}</span>
              </label>
            </div>
          </div>
        </Styled.Order>
      </Styled.ContainerPlano>
    </Styled.Container>
  );
};

export default Plano;
