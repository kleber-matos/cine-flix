import axios from "axios";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Star from "../../Star";

import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import Load from "../../Load/Load";
import * as S from "../style";

export default function AssistirFilme() {
  const [filme, setFilme] = useState([]);
  const [load, setLoad] = useState(true);
  const [play, setPlay] = useState(false);
  const { id } = useParams();
  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=6040fbaaf2352854942894b5b45b4729`
      );

      setFilme(dados.data);
      console.log(dados.data);
      setLoad(false);
    } catch (err) {
      console.log(err);
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
      <S.Container>
        <img
          src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`}
          alt=""
        />
        <S.Info>
          <h1>{filme.title}</h1>

          <p>{filme.overview}</p>

          <span>
            <Star qtd={filme.vote_average} />
          </span>

          <a href="#assistir" onClick={() => setPlay(true)}>
            Assistir
          </a>
        </S.Info>
      </S.Container>

      {play && (
        <S.PlayMovie>
          <p>Assista aqui em baixo!</p>
          <iframe
            id="assistir"
            mozallowfullscreen
            webkitallowfullscreen
            allowfullscreen
            src={`https://superflixapi.top/filme/${id}`}
            frameborder="0"
          ></iframe>
        </S.PlayMovie>
      )}
    </>
  );
}
