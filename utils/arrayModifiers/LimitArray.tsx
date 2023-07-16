import React from "react";
import styled from "styled-components";
import { formatString } from "utils";

const LimitStyled = styled.p`
  width: 100%;
  min-width: 100px;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.small};
  background-color: ${({ theme }) => theme.colors.background.normal};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  filter: opacity(0.4);
`;

interface Props {
  length: number;
  limit?: number;
  label?: string;
}

const LimitArray: React.FC<Props> = ({ length, limit = 2, label }) => {
  return (
    <LimitStyled>
      + {length - limit} {label && formatString(label)}
    </LimitStyled>
  );
};

export default LimitArray;
