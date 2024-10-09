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
  width: 100%;
  max-width: 600px;
  /* border: solid; */
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 36vh;
    li {
      font-size: 1.4rem;
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
