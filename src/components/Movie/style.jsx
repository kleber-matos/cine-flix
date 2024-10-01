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

  p {
    @media (max-width: 1300px) {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .icon {
    position: absolute;
    top: 41%;
    left: 42%;
    font-size: 4rem;
    opacity: 0;
    transition: 0.5s;

    @media (max-width: 1300px) {
    }
  }

  .selo {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 30%;
    color: black;
    font-weight: 700;
    text-align: center;
    border-radius: 0 0 0 10px;
    background-color: #f8b319;
  }

  .load {
    position: absolute;
    top: 41%;
    left: 42%;
    width: 50px;
    z-index: 0;
    width: 30px;
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
