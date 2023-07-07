import styled from "@emotion/styled";
import { typography } from "../../styles/typography";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
`;

export const StyledInput = styled.input`
  padding: 8px 12px;
  border: 1px solid ${colors.gray[200]};
  border-radius: 6px;
  width: 100%;
`;

export const StyledLabel = styled.label`
  ${typography.text.xs};
  text-transform: uppercase;
`;
