import Input from "../components/Input";
import Logo from "../assets/images/logo.png";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Button from "../components/Button/button";
import { NavLink } from "react-router-dom";

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
  a {
    font-weight: 600;
    font-size: 1.125rem;
    text-decoration: none;
    color: black;
    width: 8.375rem;
    text-align: center;
    padding: 0.75rem 0;
  }

  .active {
    border-bottom: 2px solid ${colors.pallette.orange};
  }
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

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

function LoginPage() {
  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const credentials = { email: email.value, password: password.value };
    console.log(credentials);
  }

  return (
    <div>
      <ContainerHeader>
        <ContainerLogo>
          <img src={Logo} />
        </ContainerLogo>
        <ContainerLinks>
          <StyledNavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </StyledNavLink>
          <StyledNavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Signup
          </StyledNavLink>
        </ContainerLinks>
      </ContainerHeader>
      <ContainerForm>
        <StyledForm onSubmit={handleSubmit}>
          <div>
            <Input
              label={"Email adress"}
              placeholder={"user@mail.com"}
              name={"email"}
            ></Input>
            <br />
            <br />
            <Input
              type={"password"}
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
