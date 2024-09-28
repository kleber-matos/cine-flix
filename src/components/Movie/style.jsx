import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  margin-top: 15px;
  min-height: 50vh;

  img {
    width: 100%;
    z-index: 1;
    position: relative;
  }

  .icon {
    position: absolute;
    top: 41%;
    left: 42%;
    font-size: 4rem;
    opacity: 0;
    transition: 0.5s;
  }

  .load {
    position: absolute;
    top: 41%;
    left: 42%;
    width: 50px;
    z-index: 0;
  }

  &:hover {
    .icon {
      opacity: 1;
      z-index: 2;
    }

    img {
      opacity: 0.5;
      transition: 0.5s;
    }
    .load {
      opacity: 0;
    }
  }
`;
