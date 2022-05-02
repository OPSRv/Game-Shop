import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ThemeContext } from "styled-components";

const Switch = styled.div`
  width: 40px;
  height: 25px;
  background-color: #a0a8b165;
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 2.5px;
  cursor: pointer;
  &[data-ison="true"] {
    justify-content: flex-end;
  }
`;

const Handle = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: #fc8b40;
  border-radius: 40px;
`;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const ThemeToogler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <Switch data-ison={isOn} onClick={toggleSwitch}>
      <Handle
        layout
        transition={spring}
        onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
      />
    </Switch>
  );
};

export default ThemeToogler;
