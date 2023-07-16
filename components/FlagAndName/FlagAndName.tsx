import React from "react";
import { FlagsAndTextStyled } from "./FlagsAndName.styles";
import { truncateString } from "utils";

interface Props {
  flag: string | JSX.Element;
  name: string;
}

const FlagAndName: React.FC<Props> = ({ flag, name }) => {
  return (
    <FlagsAndTextStyled>
      <i className="flag">{flag}</i>
      <p className="text">{truncateString(name, 15)}</p>
    </FlagsAndTextStyled>
  );
};

export default FlagAndName;
