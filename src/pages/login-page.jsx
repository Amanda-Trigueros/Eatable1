import Input from "../components/Input";
import Logo from "../assets/images/logo.png";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Button from "../components/Button/button";

const ContainerHeader = styled.div`
  background-color: ${colors.white};
  display: grid;
  place-item: center;
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.06);
`;

const ContainerLogo = styled.div`
  height: 40vh;
  display: grid;
  place-items: center;
`;

const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 55vh;
`;

const ContainerForm = styled.div`
  padding: 3rem;
`;

function LoginPage() {
  return (
    <div>
      <ContainerHeader>
        <ContainerLogo>
          <img src={Logo} />
        </ContainerLogo>
        <ContainerLinks>
          <a href="#">Login</a>
          <a href="#">Signup</a>
        </ContainerLinks>
      </ContainerHeader>
      <ContainerForm>
        <StyledForm>
          <div>
            <Input
              label={"Email adress"}
              placeholder={"user@mail.com"}
              name={"email"}
            ></Input>
            <br/>
            <br/>
            <Input
              label={"Password"}
              placeholder={"******"}
              name={"password"}
            ></Input>
          </div>
          <Button type={"primary"} isFullWidth>
            Login
          </Button>
        </StyledForm>
      </ContainerForm>
    </div>
  );
}

export default LoginPage;
