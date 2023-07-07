import styled from "@emotion/styled";
import UnauthenticatedApp from "./UnauthenticatedApp";

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;

function App() {
  return (
    <Container>
      <UnauthenticatedApp />
    </Container>
  );
}

export default App;
