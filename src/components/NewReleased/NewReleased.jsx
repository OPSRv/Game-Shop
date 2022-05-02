import React from "react";
import styled from "styled-components";
import FreeFirer from "../../assets/images/newReleased/FreeFirer.png";
import GhostofTsushima3 from "../../assets/images/newReleased/GhostofTsushim3.png";
import GhostofTsushima from "../../assets/images/newReleased/GhostofTsushima.png";
import GhostofTsushima2 from "../../assets/images/newReleased/GhostofTsushima2.png";
import GhostofTsushima4 from "../../assets/images/newReleased/GhostofTsushima4.png";
import NeedforSpeed from "../../assets/images/newReleased/NeedforSpeed.png";
import NeedforSpeed2 from "../../assets/images/newReleased/NeedforSpeed2.png";
import WitcherHunt from "../../assets/images/newReleased/WitcherHunt.png";
import { ReactComponent as Star } from "../../assets/images/star.svg";

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
  {
    id: 5,
    name: "Need for Speed",
    rating: "4.5",
    genre: "Action-rpg",
    image: `${NeedforSpeed2}`,
  },
  {
    id: 6,
    name: "Ghost of Tsushima",
    rating: "4.5",
    genre: "war Battle",
    image: `${GhostofTsushima2}`,
  },
  {
    id: 7,
    name: "GhostofTsushima",
    rating: "4.5",
    genre: "war Battle",
    image: `${GhostofTsushima3}`,
  },
  {
    id: 8,
    name: "Ghost of Tsushima",
    rating: "4.5",
    genre: "war Battle",
    image: `${GhostofTsushima4}`,
  },
];

const NewReleasedWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const HeaderText = styled.h2`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 25px;
  color: ${(props) => props.theme.colorMainItem};
  margin: 0;
  margin-top: 10px;
  margin-bottom: 15px;
`;
const NewReleasedItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const NewReleasedItem = styled.div`
  height: 82px;
  width: 254px;
  background-color: ${(props) => props.theme.backgroundColorLeftSidebar};
  box-shadow: ${(props) => props.theme.boxShadowGameCard};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const ImageGame = styled.img`
  width: 71px;
  filter: drop-shadow(${(props) => props.theme.filter});
  border-radius: 10px;
  margin: 10px;
`;
const NewReleasedText = styled.div`
  height: 62px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

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
    /* identical to box height, or 83% */

    color: ${(props) => props.theme.colorUnderText};
  }
`;
const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
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

const ratingStar = () => {
  const starCount = NewReleasedList.length;

  for (let i = 0; i < starCount; i++) {
    return (
      <RatingWrapper>
        <Star />
        <h4>{NewReleasedList[i].rating}</h4>
      </RatingWrapper>
    );
  }
};

const NewReleased = () => {
  return (
    <>
      <NewReleasedWrapper>
        <HeaderText>New Released</HeaderText>
        <NewReleasedItemWrapper>
          {NewReleasedList.map((item) => {
            return (
              <NewReleasedItem key={item.id}>
                <ImageGame src={item.image} alt="image" />
                <NewReleasedText>
                  <h3>{item.name}</h3>
                  <h4>{item.genre}</h4>
                  <RatingWrapper>
                    <h4>{item.rating}</h4>
                    <Star />
                  </RatingWrapper>
                </NewReleasedText>
              </NewReleasedItem>
            );
          })}
        </NewReleasedItemWrapper>
      </NewReleasedWrapper>
    </>
  );
};

export default NewReleased;
