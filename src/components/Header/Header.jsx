import React from "react";
import styled from "styled-components";
import ThemeToogler from "../ThemeToogler/ThemeToogler";
import Menu from "../Menu/Menu";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Menu />
        <ThemeToogler />
      </HeaderWrapper>
    </>
  );
};

export default Header;
