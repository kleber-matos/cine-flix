/** @format */

import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CardSeries from "../../components/Card/CardSerie";
import * as S from "../Home/style";
import Movie from "../../components/Movie";

import axios from "axios";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Load from "../../components/Load/Load";

export default function Series() {
  const [filme, setFilme] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(true);

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=${page}`
      );

      setFilme(dados.data.results);
      console.log(dados.data.results);
      setLoad(false);
    } catch (err) {
      console.log(err);
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
      <S.SubTitle>
        Assista suas séries do momento <span>agora!</span>
      </S.SubTitle>

      <S.GridContainer>
        {filme.map((item, id) => (
          <>
            <Movie
              rota={"/assitirserie/"}
              id={item.id}
              title={item.name}
              imagem={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              star={item.vote_average}
            />
          </>
        ))}
      </S.GridContainer>

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

      {/* <h1>Titulo</h1>
      <h2>SubTitulo</h2>
      <h3>H3</h3>
      <p>Paragrafo</p> */}
    </>
  );
}
