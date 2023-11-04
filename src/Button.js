import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const BaseButton = styled.button``;

const FilledButton = styled(BaseButton)`
  background-color: COLORS.primary;
`;

const Button = ({ variant, size, children }) => {
  return <BaseButton></BaseButton>;
};

export default Button;
