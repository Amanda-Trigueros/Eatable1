import styled from "@emotion/styled";
import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";
import { useAuth } from "./context/auth-context";

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;

function App() {
  const { user } = useAuth();

  return(
  <Container>
    {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
  </Container>
  )
}

export default App;
