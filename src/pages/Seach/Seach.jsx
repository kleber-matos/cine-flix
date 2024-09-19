/** @format */

import * as S from "./style";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import CardFilme from "../../components/Card/CardFilme";
import CardSerie from "../../components/Card/CardSerie";
import Load from "../../components/Load/Load";

export default function Seach() {
  const [busca, setBusca] = useState("d");
  const [filme, setFilme] = useState([]);
  const [serie, setSerie] = useState([]);
  const [buscaFilmes, setBuscaFilmes] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [load, setLoad] = useState(true);

  const dadosFilmes = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${busca}&api_key=6040fbaaf2352854942894b5b45b4729`
      );
      setFilme(dados.data.results);
      console.log(dados.data.results);
      setLoad(false);
    } catch (err) {
      console.log(err);
    }
  };

  const dadosSeries = async () => {
    const dados1 = await axios.get(
      `https://api.themoviedb.org/3/search/tv?query=${busca}&api_key=6040fbaaf2352854942894b5b45b4729`
    );
    setSerie(dados1.data.results);
  };

  useEffect(() => {
    dadosFilmes();
    dadosSeries();
  }, [buscaFilmes]);

  function enter(event) {
    if (event.key === "Enter") {
      setBuscaFilmes(!buscaFilmes);
      setMensagem(`Resultados encontrados por: "${busca}" `);
    }
  }

  if (load) {
    return <Load />;
  }

  return (
    <div>
      <Header />

      <S.Buscar>
        <div>
          <button
            onClick={() => {
              setBuscaFilmes(!buscaFilmes);
              setMensagem(`Resultados encontrados por: "${busca}" `);
            }}
          >
            buscar
          </button>
          <input
            placeholder="Buscar..."
            type="text"
            onChange={(e) => setBusca(e.target.value)}
            onKeyDown={enter}
          />
        </div>
      </S.Buscar>

      <S.SubTitle>{mensagem}</S.SubTitle>

      <S.Container>
        <S.Box>
          <S.Card>
            {filme.map((item, id) => (
              <section key={id}>
                <CardFilme
                  id={item.id}
                  title={item.title}
                  imagem={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
              </section>
            ))}
          </S.Card>
          <S.Card>
            {serie.map((item, id) => (
              <section key={id}>
                <CardSerie
                  id={item.id}
                  title={item.name}
                  imagem={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
              </section>
            ))}
          </S.Card>
        </S.Box>
      </S.Container>
    </div>
  );
}
