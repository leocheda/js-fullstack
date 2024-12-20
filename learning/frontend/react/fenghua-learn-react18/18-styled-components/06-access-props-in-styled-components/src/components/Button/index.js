import React from "react";
import { StyledButton } from "./styles";

function Button({ inverse = false }) {
  return <StyledButton inverse={inverse}>按钮</StyledButton>;
}

export default Button;
