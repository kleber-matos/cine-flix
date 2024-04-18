/** @format */
import styled from "styled-components";
import load from "../../assets/load.gif";

export const Card = styled.div`
  border: solid 0.3px #3333336c;
  background-image: url(${load});

  width: 25vw;
  max-width: 300px;
  height: 55vh;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-align: center;
  margin: 1rem;
  margin-top: 2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 12vh;
  }

  h2 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }

  button {
    width: 80%;
    height: 25%;
    background-color: red;
    color: white;
    border: none;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 70%;
    background-image: url(${load});
  }

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const Assistir = styled.section`
  background-color: black;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

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
  background-color: red;
  width: 30%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
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
