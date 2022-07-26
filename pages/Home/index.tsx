import * as Styled from "./styled";
import { useEffect, useState } from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import api from "../../services/api";
import { idUser } from "../../services/useUserStorage";
import Plans from "../../components/Plans";
import { Button } from "@material-ui/core";
import Person from "../../public/images/img.png";

interface planoProps {
  plan: {
    _id: string | any;
    name_plan: string | any;
    value_plan: string | any;
    description_plan: string | any;
  };
}
[];

const Home = () => {
  const [plano, setPlano] = useState<planoProps[]>([] as any);

  useEffect(() => {
    const getPlans = async () => {
      const response = await api.get(`/plans`);
      if (response.status === 200) {
        setPlano(response?.data);
      }
    };
    getPlans();
  }, []);

  return (
    <>
      <Styled.Container>
        <Header />
        <Styled.DashBoard>
          <ul>
            {plano?.map((item: any) => {
              return (
                <Plans
                  plan={item?.name_plan}
                  price={item?.value_plan}
                  description={item?.description_plan}
                  img={Person}
                  _id={item?._id}
                />
              );
            })}
          </ul>
        </Styled.DashBoard>
        <Footer />
      </Styled.Container>
    </>
  );
};

export default Home;
