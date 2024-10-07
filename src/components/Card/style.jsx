/** @format */
import styled, { css } from "styled-components";

const BreackText = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4;
`;

const Flexbox = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  img {
    width: 100%;
    height: 60vh;
    opacity: 0.7;
  }
`;

export const Info = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  p,
  span {
    ${BreackText}
    margin: 10px 0 20px 0;
  }

  a {
    width: 100%;
    height: 5vh;
    font-size: 1.4rem;
    font-weight: 600;
    background-color: red;
    color: white;
    border-radius: 10px;
    max-width: 350px;
    margin: 10px 0 25px 0;
    cursor: pointer;
    ${Flexbox}
    &:hover {
      background-color: #ff0000b7;
    }
  }
`;

export const PlayMovie = styled.section`
  iframe {
    width: 100%;
    height: 100vh;

    @media (max-width: 910px) {
      height: 50vh;
    }
  }

  p {
    margin: 20px 0 20px 0;
  }
`;
