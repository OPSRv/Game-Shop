import React from "react";
import styled from "styled-components";

const HeaderList = [
  {
    id: 1,
    name: "Game",
  },
  {
    id: 2,
    name: "Live score",
  },
  {
    id: 3,
    name: "Statistics",
  },
  {
    id: 4,
    name: "Analitics",
  },
  {
    id: 5,
    name: "Forecasts",
  },
];

const MenuItemWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 536px;
  height: 72px;
  width: 100%;
`;
const HeaderItem = styled.div`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  color: ${(props) => props.theme.colorUnderText};
  cursor: pointer;
`;

const Menu = () => {
  return (
    <MenuItemWrapper>
      {HeaderList.map((header) => {
        return <HeaderItem key={header.id}>{header.name}</HeaderItem>;
      })}
    </MenuItemWrapper>
  );
};

export default Menu;
