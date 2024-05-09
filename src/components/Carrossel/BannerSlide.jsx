/** @format */

import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  /* border: solid red 3px; */
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 12rem;
  }
  img {
    width: 100%;
    max-width: 900px;
    height: 30vh;
  }

  @media (max-width: 700px) {
    h2 {
      font-size: 12rem;
      position: absolute;
      left: 0;
    }
  }
`;

export default function BannerSlide({ img, num }) {
  return (
    <Banner>
      <h2>{num}</h2>
      <img src={img} alt="img" />
    </Banner>
  );
}
