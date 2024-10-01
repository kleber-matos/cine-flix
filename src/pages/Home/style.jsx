import styled, { css } from "styled-components";

const FlexBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpaceEvenly = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 3rem;
`;

export const SubTitle = styled.h2`
  ${FlexBox}
  justify-content: start;
  font-size: 2.5rem;

  height: 10vh;

  span {
    color: red;
    margin-left: 0.5rem;
  }
  @media (max-width: 700px) {
    width: 100%;
    font-size: clamp(1.5rem, 10vw, 0.8rem);
  }
`;

export const Container = styled.section`
  ${FlexBox}
  border-top: solid 1px gray;
`;

export const Box = styled.section`
  width: 70%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const BoxPage = styled.section`
  width: 100%;
  ${FlexBox}

  div {
    ${FlexBox}
    justify-content: space-evenly;
    height: 14vh;
    width: 20%;
    min-width: 200px;
  }

  button {
    border: none;
    background-color: transparent;
    color: white;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      color: #bebebe86;
    }
  }
`;

export const ContainerGrid = styled.div``;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;
