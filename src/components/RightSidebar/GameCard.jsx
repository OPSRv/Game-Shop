import React from "react";
import styled from "styled-components";
import GameImage from "../../assets/images/img.png";
import Star from "../../assets/images/star.svg";

const GameCardWrapper = styled.div`
  height: 451px;
`;
const GameCardImage = styled.img``;

const TextWrapper = styled.div`
  margin-top: 10px;
  h2 {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 22px;
    /* or 79% */
    margin: 0;
    color: ${(props) => props.theme.colorMainItem};
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 10px;
    /* or 56% */
    margin-top: 10px;
    color: #9da1b4;
  }
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    color: #9da1b4;
  }
`;

const Button = styled.button`
  width: ${(props) => props.width};
  height: 55px;
  background: #fc8b40;
  box-shadow: ${(props) => props.theme.boxShadowGameCard};
  border-radius: 8px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 25px;
  color: #ffffff;
  margin-top: 15px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.95;
  }
  &:active {
    transform: translate(2px, 2px);
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 105px;
  img {
    width: 15px;
  }
  h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    margin: 0;
    margin-right: 5px;
  }
`;
const Buttone = styled.button``;

const GameCard = () => {
  return (
    <GameCardWrapper>
      <GameCardImage src={GameImage} />
      <TextWrapper>
        <h2>Need for Speed</h2>
        <p>Racing</p>
        <RatingWrapper>
          <h4>4.5</h4>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </RatingWrapper>
        <span>
          Interactively synergize revolutionary viasustaina communities.
          Energistically foster distinctiveide resource maximizing.
        </span>
      </TextWrapper>
      <Button width={"100%"}>Download Now</Button>
    </GameCardWrapper>
  );
};

export default GameCard;
