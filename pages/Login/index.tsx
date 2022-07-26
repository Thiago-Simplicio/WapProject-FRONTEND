import * as Styled from "./styled";

import Wrapper from "../../components/Login/index";

const Login = () => {
  console.log(process.env.URL_API);

  return (
    <Styled.Container>
      <Wrapper type={false} />
    </Styled.Container>
  );
};

export default Login;
