/** @format */

import React from "react";
import styled from "styled-components";
import Star from "../../components/Star";
import { Link } from "react-router-dom";

const Banner = styled.div`
  /* border: solid red 3px; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;

  div {
    position: absolute;
    left: 7%;
    top: 40%;
    z-index: 1;
  }

  h2 {
    font-size: 3rem;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }

  img {
    width: 90%;
    height: 50vh;
    object-fit: fill;
    opacity: 0.3;
  }

  @media (max-width: 700px) {
    h2,
    p {
      font-size: 1rem;
      position: absolute;
      left: 0;
      display: none;
    }
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  /* border: solid; */
  min-height: 28vh;
  width: 80vw;
  max-width: 900px;

  a {
    height: 5vh;
    background-color: #f8b319;
    border-radius: 5px;
    font-weight: 600;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    cursor: pointer;
  }

  p {
    font-size: 16px;
    font-weight: 300;
  }

  @media (max-width: 700px) {
    width: 90%;
    justify-content: end;
  }
`;

export default function BannerSlide({ img, title, pagina, id, description }) {
  return (
    <Banner>
      <Box>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`${pagina}${id}`}>Asssitir Agora!</Link>
      </Box>
      <img src={img} alt="img" />
    </Banner>
  );
}
