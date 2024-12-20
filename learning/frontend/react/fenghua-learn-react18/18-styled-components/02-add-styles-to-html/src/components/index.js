import React from "react";
import styled from "styled-components";

function Button() {
  return <StyledButton>按钮</StyledButton>;
}

const StyledButton = styled.button`
  padding: 9px 26px;
  background: #00a6ff;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
`;

export default Button;
