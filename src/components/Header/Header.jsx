import { useState } from "react";
import * as S from "./style";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <S.Header>
        <section>
          <Link className="logo" to="/">
            Cine Flix
          </Link>
          <button onClick={() => setMenu(!menu)}>{menu ? "X" : "☰"}</button>

          <S.NavDesktop>
            <nav>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/filmes">Filmes</Link>
                </li>
                <li>
                  <Link to="/series">Séries</Link>
                </li>
                <li>
                  <FaSearch />
                </li>
              </ul>
            </nav>
          </S.NavDesktop>
        </section>
        <S.NavMobile>
          {menu && (
            <nav>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/filmes">Filmes</Link>
                </li>
                <li>
                  <Link to="/series">Séries</Link>
                </li>
                <li>
                  <a href="">
                    <FaSearch />
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </S.NavMobile>
      </S.Header>
    </>
  );
}
