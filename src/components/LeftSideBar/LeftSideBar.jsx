import React from "react";
import styled from "styled-components";
import { ReactComponent as BurgerIcon } from "../../assets/images/menuicon.svg";
import { ReactComponent as Home } from "../../assets/images/leftSideBar/home.svg";
import { ReactComponent as Gamepad } from "../../assets/images/leftSideBar/gamepad.svg";
import { ReactComponent as Message } from "../../assets/images/leftSideBar/message.svg";
import { ReactComponent as StarMenu } from "../../assets/images/leftSideBar/starsMenu.svg";
import { ReactComponent as Setting } from "../../assets/images/leftSideBar/setting.svg";
import { ReactComponent as Exit } from "../../assets/images/leftSideBar/exit.svg";

import { motion } from "framer-motion";

const LeftSidebarIcon = [
  {
    id: 1,
    image: <Home />,
  },
  {
    id: 2,
    image: <Gamepad />,
  },
  {
    id: 3,
    image: <Message />,
  },
  {
    id: 4,
    image: <StarMenu />,
  },
  {
    id: 5,
    image: <Setting />,
  },
  {
    id: 6,
    image: <Exit />,
  },
];

const LeftSideBarWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColorLeftSidebar};
`;

const SideBar = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Burger = styled.div`
  width: 30px;
  margin-bottom: 116px;
  cursor: pointer;
`;

const MenuIcon = styled.div`
  width: 50px;
  height: 100%;
  max-height: 450px;
  min-height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonIcon = styled(motion.button)`
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.backgroundColor};
  box-shadow: ${(props) => props.theme.boxShadowButtone};
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
  border: none;
  cursor: pointer;
  svg {
    fill: ${(props) => props.theme.svgColor};
  }
  path {
    fill: ${(props) => props.theme.svgColor};
    transition: all 0.1s ease;
  }
  &:hover {
    background: #fc8b40;
    box-shadow: 0px 6px 24px rgba(252, 139, 64, 0.2);

    svg {
      fill: ${(props) => props.theme.svgColor};
    }
    path {
      fill: ${(props) => props.theme.svgColor};
      transition: all 0.2s ease;
    }
  }
  &:active {
    transform: scale(0.95);
  }
`;

const LeftSideBar = () => {
  return (
    <>
      <LeftSideBarWrapper>
        <SideBar>
          <Burger>
            <BurgerIcon />
          </Burger>
          <MenuIcon>
            {LeftSidebarIcon.map((item) => {
              return (
                <ButtonIcon
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={item.id}
                >
                  {item.image}
                </ButtonIcon>
              );
            })}
          </MenuIcon>
        </SideBar>{" "}
      </LeftSideBarWrapper>
    </>
  );
};

export default LeftSideBar;
