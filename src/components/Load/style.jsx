/** @format */

import styled from "styled-components";

export const Load = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader-circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 10px solid #24242465;
    border-top-color: #ffffff;
    animation: loader-circle 1.5s linear infinite;
  }

  @keyframes loader-circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
