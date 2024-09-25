import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import styled from "styled-components";

export default function index({ qtd }) {
  const numStars = Math.round(qtd / 2);
  let withStar = [];
  let noStar = [];

  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      withStar.push(i);
    } else {
      noStar.push(i);
    }
  }

  const Estrela = styled.div`
    display: flex;
    color: #f8b319;
    font-size: 1.5rem;
  `;

  return (
    <>
      <Estrela>
        {withStar.map((index) => (
          <FaStar key={index} />
        ))}
        {noStar.map((index) => (
          <FaRegStar key={index} />
        ))}
      </Estrela>
    </>
  );
}
