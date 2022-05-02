import React from "react";
import styled from "styled-components";

import FreeFirer from "../../assets/images/newReleased/FreeFirer.png";
import GhostofTsushima from "../../assets/images/newReleased/GhostofTsushima.png";
import NeedforSpeed from "../../assets/images/newReleased/NeedforSpeed.png";
import WitcherHunt from "../../assets/images/newReleased/WitcherHunt.png";

export const NewReleasedList = [
  {
    id: 1,
    name: "Ghost of Tsushima",
    rating: "4.5",
    genre: "war Battle",
    image: `${GhostofTsushima}`,
  },
  {
    id: 2,
    name: "Need for Speed",
    rating: "4.5",
    genre: "Racing",
    image: `${NeedforSpeed}`,
  },
  {
    id: 3,
    name: "Witcher Hunt",
    rating: "4.5",
    genre: "war Battle",
    image: `${WitcherHunt}`,
  },
  {
    id: 4,
    name: "Free Firer",
    rating: "4.5",
    genre: "war Battle",
    image: `${FreeFirer}`,
  },
];

const LiveGameWrapper = styled.div`
  margin-bottom: 21px;
`;

const NewReleasedItem = styled.div`
  height: 72px;
  width: 254px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const ImageGame = styled.img`
  width: 71px;
  filter: drop-shadow(${(props) => props.theme.filter});
  border-radius: 10px;
  margin-right: 10px;
`;
const NewReleasedText = styled.div`
  height: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    margin: 0;
    color: ${(props) => props.theme.colorMainItem};
  }
  h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 10px;
    margin: 0;
    color: #9da1b4;
  }
`;

const HeaderText = styled.h2`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 22px;
  color: ${(props) => props.theme.colorMainItem};
  margin: 0;
  margin-bottom: 10px;
`;

const LiveGame = () => {
  return (
    <>
      <LiveGameWrapper>
        <HeaderText>Live Game</HeaderText>
        {NewReleasedList.map((item) => {
          return (
            <NewReleasedItem key={item.id}>
              <ImageGame src={item.image} alt="image" />
              <NewReleasedText>
                <h3>{item.name}</h3>
                <h4>{item.genre}</h4>
              </NewReleasedText>
            </NewReleasedItem>
          );
        })}
      </LiveGameWrapper>
    </>
  );
};

export default LiveGame;
