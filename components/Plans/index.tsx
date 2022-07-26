import * as Styled from "./styled";
import { Button } from "@material-ui/core";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { setPlano } from "../../services/useUserStorage";
import { idUser } from "../../services/useUserStorage";
import api from "../../services/api";
import Image from "next/image";

interface propsPlans {
  _id: string | any;
  description: string | any;
  plan: string | any;
  price: string | any;
  img: string | any;
}

const Plans = (props: propsPlans) => {
  return (
    <Styled.Container>
      <Styled.Title>
        <span>{props?.plan}</span>
      </Styled.Title>
      <Styled.Img>
        <img src={props?.img} />
      </Styled.Img>
      <Styled.Info>
        <div className="price">
          <span>{`R$ ${props?.price}`}</span>
          <label>Todo mês</label>
        </div>
        <div className="description">
          <span>{props?.description}</span>
        </div>
      </Styled.Info>
      <Styled.Button>
        <Link href={`/Plano`}>
          <a
            onClick={async () => {
              const { status, data } = await api.post(`/create-order`, {
                subscribe_id: idUser,
                plans_id: props?._id,
              });
            }}
          >
            Assinar plano <AiOutlineRight />
          </a>
        </Link>
      </Styled.Button>
    </Styled.Container>
  );
};

export default Plans;
