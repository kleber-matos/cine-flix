import styled from "styled-components";

export const Header = styled.header`
  /* position: fixed; */
  width: 100%;
  background-color: #000000;
  li {
    list-style: none;
  }

  h2 {
    margin-left: 1rem;
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: transparent;
      color: #ffffff;
      border: none;
      font-size: clamp(1.7rem, 10vw, 3rem);
      cursor: pointer;
      margin-right: 0.5rem;
    }

    @media (min-width: 700px) {
      button {
        display: none;
      }
    }
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    border-bottom: solid;
  }
`;

export const NavDesktop = styled.div`
  ul {
    display: flex;
    justify-content: space-evenly;

    border: solid;
    width: 40vw;
  }

  @media (max-width: 699px) {
    display: none;
  }
`;

export const NavMobile = styled.div`
  text-align: center;

  nav {
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    backdrop-filter: blur(10px);
    background-color: #000000;
  }

  ul {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a {
    font-size: clamp(1.5rem, 10vw, 2rem);
  }

  @media (min-width: 700px) {
    display: none;
  }
`;
