/** @format */

import React, { useEffect, useState } from "react";
import * as S from "./style";
import Header from "../../components/Header/Header";
import axios from "axios";
import CardFilme from "../../components/Card/CardFilme";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Load from "../../components/Load/Load";

export default function Home() {
  const [filme, setFilme] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(true);

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=${page}`
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
        Você está no CineFlix <span>gratuito!</span>
      </S.SubTitle>
      <S.Container>
        <S.Box>
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
        </S.Box>
      </S.Container>

      <S.BoxPage>
        <div>
          <button
            onClick={() =>
              setPage((prev) => (prev > 1 ? prev - 1 : (prev = 1)))
            }>
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
