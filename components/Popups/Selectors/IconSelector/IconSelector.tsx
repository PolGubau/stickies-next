import styled from "styled-components";
import { icons } from "utils/icons/icons.data";
import { Button } from "components";
import React from "react";

const IconSelectorPopupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.normal};
  z-index: 1000;
  top: 120%;
  position: absolute;
  box-shadow: ${(props) => props.theme.shadows.normal};
  background-color: ${(props) => props.theme.colors.background.normal};
  border-radius: ${(props) => props.theme.borderRadius.normal};
  padding: ${(props) => props.theme.spacing.normal};
  max-width: 400px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => props.theme.spacing.normal};
  }
  .icons {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: ${(props) => props.theme.spacing.normal};
  }
`;
const IconSelectorStyled = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.small};
  h4 {
    margin: 0;
    font-weight: 400;
  }
`;

interface Props {
  value: string;
  onChange: (icon: string) => void;
}

const IconSelector: React.FC<Props> = ({ value, onChange }) => {
  const [open, setOpen] = React.useState(false);
  const IconFC = icons.find((icon) => icon.name === value);
  return (
    <IconSelectorStyled>
      {/* {value.length > 0 && <h4>Icon</h4>} */}
      <Button onClick={() => setOpen(!open)}>
        <div className="flex expandChildren alignCenter">
          {IconFC?.icon ?? <span>Icon</span>}
          {open ? <span>▲</span> : <span>▼</span>}
        </div>
      </Button>

      {open && (
        <IconSelectorPopupStyled>
          <header>
            <input type="text" placeholder="Search" />
            <button onClick={() => setOpen(!open)}>X</button>
          </header>
          <div className="icons">
            {icons.map((icon) => (
              <Button
                key={icon.id}
                type={icon.name === value ? "main" : "normal"}
                className="icon"
                icon={icon.icon}
                onClick={() => {
                  onChange(icon.name);
                  setOpen(false);
                }}
              />
            ))}
          </div>
        </IconSelectorPopupStyled>
      )}
    </IconSelectorStyled>
  );
};

export default IconSelector;
