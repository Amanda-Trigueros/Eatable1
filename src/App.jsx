import styled from "@emotion/styled";
import LoginPage from "./pages/login-page";

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;

function App() {
  return (
    <Container>
      <LoginPage />
    </Container>
  );
}

export default App;
