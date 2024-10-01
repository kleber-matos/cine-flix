import axios from "axios";
import * as S from "./style";
import React, { useEffect, useState } from "react";

// Components
import Movie from "../../components/Movie";
import Load from "../../components/Load/Load";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";

export default function Seach() {
  // States
  const [filme, setFilme] = useState([]);
  const [serie, setSerie] = useState([]);
  const [busca, setBusca] = useState("d");
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
    <>
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

      <S.GridContainer>
        {filme.map((item, id) => (
          <>
            <Movie
              key={id}
              rota={"/assistirfilme/"}
              id={item.id}
              title={item.title}
              star={item.vote_average}
              imagem={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            />
          </>
        ))}
      </S.GridContainer>
      <S.GridContainer>
        {serie.map((item, id) => (
          <>
            <Movie
              key={id}
              rota={"/assitirserie/"}
              id={item.id}
              title={item.name}
              star={item.vote_average}
              imagem={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            />
          </>
        ))}
      </S.GridContainer>

      <hr />
      <Footer />
    </>
  );
}
