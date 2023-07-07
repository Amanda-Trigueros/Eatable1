import PropTypes from "prop-types";
import { Container, StyledInput, StyledLabel } from "./styles"

function Input({ label, ...rest }) {
  return (
    <Container>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput {...rest} />
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string,
};

export default Input;
