import * as S from "./style";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaStoreAlt } from "react-icons/fa";

export default function index() {
  return (
    <S.Footer>
      <S.Container>
        <S.Links>
          <div>
            <h3>Links importantes</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/kleber-matos/cine-flix"
                >
                  Repositorio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Minhas redes</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/kleber-matos/"
                >
                  LinkedIn
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a target="_black" href="https://github.com/kleber-matos">
                  GitHub
                  <FaGithub />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/kleber_sk/">
                  Instagram
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </S.Links>

        <S.Dev>
          <p>COPYRIGHT 2024 ©</p>
          <p>
            Desenvolvido para fins de estudos por <span>Kleber matos</span>
          </p>
        </S.Dev>
      </S.Container>
    </S.Footer>
  );
}
