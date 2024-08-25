/** @format */
import styled, { css } from "styled-components";

const BreackText = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Flexbox = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 25vw;
  max-width: 300px;
  height: 55vh;
  margin: 1rem;
  margin-top: 2rem;
  text-align: center;
  border: solid 0.5px #3333336c;
  overflow: hidden;

  .title {
    ${BreackText}
    -webkit-line-clamp: 1;
    color: white;
    height: 20vh;
    display: flex;

    p {
      font-size: 1.2rem;
    }
  }

  div {
    ${Flexbox}
    justify-content: space-evenly;
    flex-direction: column;
    height: 25%;
    width: 100%;
  }

  h2 {
    ${BreackText}
    -webkit-line-clamp: 2;
  }

  button {
    width: 80%;
    height: 4vh;
    border: none;
    font-weight: 700;
    border-radius: 4px;
    background-color: red;
    color: white;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 70%;
  }

  @media (max-width: 700px) {
    width: 90vw;
    button {
      height: 40%;
    }

    div {
      height: 30%;
      width: 100%;
      padding-bottom: 1rem;
    }

    .title {
      p {
        font-size: 1rem;
      }
    }
  }
`;

export const Assistir = styled.section`
  ${Flexbox}
  justify-content: space-evenly;
  background-color: black;
  height: 95vh;

  img {
    width: 30%;
  }

  h2 {
    text-align: center;
    color: red;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: space-evenly;
    img {
      width: 100%;
      height: 40%;
    }
  }
`;
export const About = styled.section`
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;

  .sinopse {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 7;
    height: 48%;
    color: #a8a8a8;
  }

  @media (max-width: 700px) {
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    p {
      font-size: clamp(1rem, 10vw, 0.5rem);
    }
  }

  @media (min-width: 701px) {
    width: 40%;
  }
`;

export const Iframe = styled.div`
  position: relative;
  iframe {
    border: solid black;
    height: 100vh;
    width: 100%;
  }

  @media (max-width: 700px) {
    iframe {
      height: 40vh;
    }
  }
`;

export const Button = styled.a`
  ${Flexbox}
  background-color: red;
  width: 30%;
  height: 10%;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  &:hover {
    background-color: #ff0000c8;
  }

  @media (max-width: 700px) {
    width: 80%;
    height: 7vh;
    margin-bottom: 1rem;
  }
`;

export const SubTtitle = styled.h2`
  font-size: clamp(1.2rem, 10vw, 2rem);
  text-align: center;
`;
