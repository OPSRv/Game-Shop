import React from "react";
import styled from "styled-components";
import User from "./User";
import LiveGame from "./LiveGame";
import GameCard from "./GameCard";

const RightSidebarWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColorLeftSidebar};
  box-shadow: ${(props) => props.theme.boxShadowGameCard};
  border-radius: 0px 40px 40px 0px;
  padding: 25px 13px 0px 12px;
`;

const RightSidebar = () => {
  return (
    <>
      <RightSidebarWrapper>
        <User />
        <LiveGame />
        <GameCard />
      </RightSidebarWrapper>
    </>
  );
};

export default RightSidebar;
