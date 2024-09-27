import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0 3rem 0;

  @media (max-width: 700px) {
    /* border: solid red; */
    flex-direction: column;
    justify-content: center;
    margin: 2rem 0 1rem 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: solid yellow; */
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Logo = styled.h1`
  font-size: 1.7rem;
`;

export const Menu = styled.ul`
  display: flex;
  width: 40vw;
  max-width: 500px;
  justify-content: space-between;

  a {
    font-size: 1.3rem;
  }

  @media (max-width: 700px) {
    height: 30vh;
    justify-content: space-evenly;
    align-items: end;
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    width: 100%;

    li {
      border-bottom: solid 4px;
      width: 100%;
    }
  }
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 2.3rem;

  @media (min-width: 700px) {
    display: none;
  }
`;
