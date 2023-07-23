import React, { useState } from "react";
import { SwitchStyled } from "./styled";
import { spring } from "style/animations";
import { motion } from "framer-motion";

interface Props {
  label?: string;
  name?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
  error?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
  size?: "small" | "normal" | "large";
}

const Switch: React.FC<Props> = ({
  label,
  value = false,
  onChange,
  disabled,
  required,
  error,
  helperText,
  className,
  size = "normal",
}) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
    onChange && onChange(!isOn);
  };

  return (
    <SwitchStyled $isTrue={value} $size={size} className={className}>
      {Boolean(label) && <label className="label">{label}</label>}

      <button className="switch" data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </button>

      {Boolean(helperText) && <span>{helperText}</span>}
    </SwitchStyled>
  );
};

export default Switch;
