import React, { useEffect, useState } from "react";
import * as S from "./style";
import Header from "../../components/Header/Header";
import axios from "axios";
import CardFilme from "../../components/Card/CardFilme";

export default function Home() {
  const [filme, setFilme] = useState([]);

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=1`
      );

      setFilme(dados.data.results);
      console.log(dados.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    buscaDados();
  }, []);

  return (
    <>
      <Header />

      <S.SpaceEvenly>
        {filme.map((item, id) => (
          <div key={id}>
            <CardFilme
              id={item.id}
              title={item.title}
              imagem={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            />
          </div>
        ))}
      </S.SpaceEvenly>

      {/* <h1>Titulo</h1>
      <h2>SubTitulo</h2>
      <h3>H3</h3>
      <p>Paragrafo</p> */}
    </>
  );
}
