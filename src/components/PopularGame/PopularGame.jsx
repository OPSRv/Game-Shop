import React from "react";
import styled from "styled-components";

import Sniper from "../../assets/images/popuralGames/1.png";
import neddforspped from "../../assets/images/popuralGames/2.png";
import WitcherHunt from "../../assets/images/popuralGames/3.png";
import PabgWar from "../../assets/images/popuralGames/4.png";
import Sniper2 from "../../assets/images/popuralGames/5.png";
import Star from "../../assets/images/star.svg";

export const PopularGameList = [
  {
    id: 1,
    name: "Sniper 2",
    rating: "9.5",
    genre: "Action-rpg",
    image: `${Sniper}`,
  },
  {
    id: 2,
    name: "Motor Race",
    rating: "9.5",
    genre: "Action-rpg",
    image: `${neddforspped}`,
  },
  {
    id: 3,
    name: "Witcher Hunt",
    rating: "9.5",
    genre: "Action-rpg",
    image: `${WitcherHunt}`,
  },
  {
    id: 4,
    name: "Pabg war",
    rating: "9.5",
    genre: "Action-rpg",
    image: `${PabgWar}`,
  },
  {
    id: 5,
    name: "Sniper 2",
    rating: "9.5",
    genre: "Action-rpg",
    image: `${Sniper2}`,
  },
];

const PopularGameWrapper = styled.div`
  margin-bottom: 5px;
  h2 {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 25px;
    color: ${(props) => props.theme.colorMainItem};
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
const PopularGameItem = styled.div`
  height: 229px;
  width: 183.2px;
  background-image: url(${(props) => props.image});
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 20px;
  background-repeat: no-repeat;
  background-size: contain;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 61px;
  h3 {
    font-family: "Oxanium";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */
    text-transform: capitalize;
    margin: 0;
    color: #ffffff;
  }
`;
const Rating = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: "Oxanium";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  /* or 94% */

  text-transform: capitalize;

  color: #ffffff;
  p {
    font-family: "Oxanium";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 15px;
    /* or 94% */

    text-transform: capitalize;
    margin: 0;
  }
  img {
    width: 15px;
    margin-right: 5px;
  }
`;

const PopularGame = () => {
  return (
    <>
      <PopularGameWrapper>
        <h2>Most popular Game</h2>
        <ItemWrapper>
          {PopularGameList.map((game) => {
            return (
              <PopularGameItem image={game.image} key={game.id}>
                <TextWrapper>
                  <div>
                    <h3>{game.name}</h3>
                  </div>
                  <Rating>
                    <img src={Star} alt="" />
                    <p>
                      {game.rating} {game.genre}
                    </p>
                  </Rating>
                </TextWrapper>
              </PopularGameItem>
            );
          })}
        </ItemWrapper>
      </PopularGameWrapper>
    </>
  );
};

export default PopularGame;
