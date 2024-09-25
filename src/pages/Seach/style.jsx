import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  border-top: solid 1px gray;
`;

export const Box = styled.section`
  width: 100vw;
  /* border: solid; */
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  /* div {
    width: 20vw;
    border: solid;
    max-width: 300px;
    margin-bottom: 1rem;
    height: 50vh;
  } */

  img {
    width: 100%;
    height: 60%;
  }
  @media (max-width: 700px) {
    div {
      width: 80%;
    }
  }
`;

export const Buscar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;

  div {
    width: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5vh;
    border: solid 2px #3333336c;
  }

  input {
    width: 80%;
    height: 103%;
    outline: none;
    font-size: clamp(1rem, 10vw, 1.5rem);
    padding-left: 1rem;
    font-weight: 600;
    border-radius: 0px 5px 5px 0px;
  }

  button {
    width: 20%;
    background-color: red;
    color: white;
    font-weight: 600;
    border: none;
    font-size: clamp(1rem, 10vw, 1.2rem);
    height: 100%;
    border-radius: 5px 0px 0px 5px;
    cursor: pointer;
  }

  &:hover {
    button {
      background-color: #ff0000c3;
    }
  }

  @media (max-width: 700px) {
    div {
      width: 85%;
      height: 50%;
    }
    input {
      width: 70%;
    }
    button {
      width: 30%;
    }
  }
`;

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
    font-size: clamp(1rem, 10vw, 1.2rem);
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 0 5% 0 5%;
`;
