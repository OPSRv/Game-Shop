import React from "react";
import styled from "styled-components";
import { ReactComponent as Bell } from "../../assets/images/bell.svg";
import { ReactComponent as UserImage } from "../../assets/images/user.svg";

const UserWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 32px;
  width: 100%;
`;
const IconName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    margin-right: 14px;
  }
  svg {
    margin-right: 5px;
    stroke: ${(props) => props.theme.svgColor};
    path {
      /* stroke: ${(props) => props.theme.svgColor}; */
      stroke: rgb(0, 51, 255);
    }
  }

  span {
    color: ${(props) => props.theme.colorMainItem};
  }
`;

const User = () => {
  return (
    <UserWrapper>
      <IconName>
        <UserImage />
        <span>William jonson</span>
      </IconName>
      <Bell />
    </UserWrapper>
  );
};

export default User;
