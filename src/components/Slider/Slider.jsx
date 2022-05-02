import React from "react";
import styled from "styled-components";
import SliderImg from "../../assets/images/slider/BG.png";

const SliderWrapper = styled.div`
  width: 100%;
  min-height: 280px;
  filter: drop-shadow(${(props) => props.theme.filter});
  padding: 64px 30px;
  background-image: url(${(props) => props.image});
  background-size: 102%;
  background-attachment: scroll;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 14px;
  object-fit: contain;
  transition: all 0.5s ease-in-out;
  /* @media screen and (max-width: 1438px) {
    background-size: 170%;
    background-position: -400px center;
  }
  @media screen and (max-width: 1300px) {
    background-size: 180%;
    background-position: -300px center;
  }
  @media screen and (max-width: 1000px) {
    background-size: 1600px;
    background-position: -500px center;
  }
  @media screen and (max-width: 800px) {
    background-size: 1100px;
    background-position: -450px center;
  } */
`;
const SliderTextWrapper = styled.div`
  height: 172px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SliderTitle = styled.h1`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 48px;
  margin: 0;
  /* or 114% */

  color: #ffffff;
`;
const Button = styled.button`
  width: ${(props) => props.width};
  height: 55px;
  background: #fc8b40;
  box-shadow: 0px 2px 8px rgba(202, 205, 219, 0.42);
  border-radius: 8px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 25px;
  color: #ffffff;
  margin: 0;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.95;
  }
  &:active {
    transform: translate(2px, 2px);
  }
`;

const Slider = () => {
  return (
    <SliderWrapper image={SliderImg}>
      <SliderTextWrapper>
        <SliderTitle>The Forbidden Kingdom </SliderTitle>
        <SliderTitle>Adventure War</SliderTitle>
        <Button width={"160px"}>More Details</Button>
      </SliderTextWrapper>
    </SliderWrapper>
  );
};

export default Slider;
