import React, { useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import axios from "axios";

import * as S from "../Home/style";
import Header from "../../components/Header/Header";
import Load from "../../components/Load/Load";
import CardFilme from "../../components/Card/CardFilme";

export default function Filmes() {
  const [filme, setFilme] = useState([]);
  const [page, setPage] = useState(2);
  const [load, setLoad] = useState(true);

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=${page}`
      );
      setFilme(dados.data.results);
      setLoad(false);
      // console.log(dados.data.results);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    buscaDados();
  }, [page]);

  if (load) {
    return <Load />;
  }

  return (
    <>
      <Header />

      <S.SubTitle>Seus filmes favoritos estão aqui</S.SubTitle>

      <S.Container>
        <S.Box>
          <S.SpaceEvenly>
            {filme.map((item) => (
              <div key={item.id}>
                <CardFilme
                  id={item.id}
                  title={item.title}
                  imagem={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
              </div>
            ))}
          </S.SpaceEvenly>
        </S.Box>
      </S.Container>

      <S.BoxPage>
        <div>
          <button
            onClick={() =>
              setPage((prev) => (prev > 1 ? prev - 1 : (prev = 1)))
            }
          >
            <MdNavigateBefore />
          </button>
          <h2>{page}</h2>
          <button onClick={() => setPage((prev) => prev + 1)}>
            <MdNavigateNext />
          </button>
        </div>
      </S.BoxPage>
    </>
  );
}
