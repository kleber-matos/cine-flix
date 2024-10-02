/** @format */
import axios from "axios";
import * as S from "../style";

import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../Header/Header";
import Load from "../../Load/Load";

export default function AssistirFilme() {
  const [filme, setFilme] = useState([]);
  const [load, setLoad] = useState(true);
  const [play, setPlay] = useState(false);
  const { id } = useParams();

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=6040fbaaf2352854942894b5b45b4729`
      );

      setFilme(dados.data);
      setLoad(false);
      // console.log(dados.data);
    } catch (err) {
      // console.log(err);
    } finally {
      // console.log("Finally");
    }
  };

  useState(() => {
    buscaDados();
  }, []);

  if (load) {
    return <Load />;
  }

  return (
    <>
      <Header />
      <S.Assistir>
        <img
          src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`}
          alt="img"
        />
        <S.About>
          <h1>{filme.name}</h1>
          <div className="sinopse">
            <p>{filme.overview}</p>
          </div>
          <p>{filme.release_date}</p>
          <p>{filme.vote_average}</p>
          <S.Button href="#assistir" onClick={() => setPlay(true)}>
            Assistir
          </S.Button>
        </S.About>
      </S.Assistir>

      {play && (
        <>
          <S.SubTtitle>Assista aqui em baixo</S.SubTtitle>
          <S.Iframe>
            <iframe
              mozallowfullscreen
              webkitallowfullscreen
              allowfullscreen
              id="assistir"
              src={`https://superflixapi.top/serie/${id}`}
              frameborder="0"
            ></iframe>
          </S.Iframe>
        </>
      )}
    </>
  );
}
