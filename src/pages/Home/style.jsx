import styled from "styled-components";

export const SpaceEvenly = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 3rem;
`;

// export const Carrossel = styled.section`
//   border: solid;
//   position: relative;
//   z-index: 0;
//   text-align: center;

//   img {
//     width: 60vw;
//     height: 40vh;
//     opacity: 0.1;
//   }
// `;

export const SubTitle = styled.h2`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;

  span {
    color: red;
    margin-left: 0.5rem;
  }
  @media (max-width: 700px) {
    width: 100%;
    font-size: clamp(1rem, 10vw, 0.6rem);
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
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
  display: flex;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 9vh;
    width: 10%;
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
