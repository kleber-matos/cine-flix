// import { useState } from "react";
import * as S from "./style";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.Header>
        <S.Container>
          <S.Logo>
            <Link to="/">CINE FLIX</Link>
          </S.Logo>
          <S.ToggleButton onClick={toggleMenu}>
            {isOpen ? "X" : "☰"}
          </S.ToggleButton>
        </S.Container>

        <S.Menu isOpen={isOpen}>
          <li to="/">
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/filmes">FILMS</Link>
          </li>
          <li>
            <Link to="/series">SERIES</Link>
          </li>
          <li>
            <Link to="/seach">
              <FaSearch />
            </Link>
          </li>
        </S.Menu>
      </S.Header>
    </>
  );
};

export default Header;
