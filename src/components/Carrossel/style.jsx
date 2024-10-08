import styled, { css } from "styled-components";

// Mixins
const FlexBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextPoint = css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-shadow: 0.1em 0.1em 0.2em black;
`;

// Banner Styles
export const Banner = styled.div`
  ${FlexBox}
  position: relative;

  h2 {
    font-size: 3rem;
    ${TextPoint}
  }

  p {
    ${TextPoint}
    -webkit-line-clamp: 3;
  }

  img {
    width: 100%;
    height: 60vh;
    object-fit: fill;
    opacity: 0.5;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

// Qualificacao Styles
export const Qualificacao = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 5vh;
  color: black;
  max-width: 150px;
  z-index: 1;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  border-radius: 0 0 0 20px;
  background-color: #f8b319;
`;

// Box Styles
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 30vh;
  width: 80vw;
  max-width: 550px;
  position: absolute;
  left: 2%;
  top: 45%;
  z-index: 1;

  a {
    height: 5vh;
    background-color: #f8b319;
    border-radius: 5px;
    font-weight: 600;
    font-size: 1.5rem;
    ${FlexBox}
    color: black;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }

  p {
    font-size: 16px;
    font-weight: 300;
  }

  @media (max-width: 700px) {
    width: 90%;
    justify-content: flex-end;
  }
`;
