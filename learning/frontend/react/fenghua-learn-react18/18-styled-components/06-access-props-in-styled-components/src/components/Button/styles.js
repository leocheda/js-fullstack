import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 9px 26px;
  background: ${({ inverse }) => (inverse ? "none" : "#00a6ff")};
  border-radius: 8px;
  border: ${({ inverse }) => (inverse ? "1px solid #00a6ff" : "none")};
  color: white;
  cursor: pointer;
`;
