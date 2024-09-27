/** @format */

import React, { useEffect, useState } from "react";
import * as S from "./style";
import Header from "../../components/Header/Header";
import axios from "axios";
// import CardFilme from "../../components/Card/CardFilme";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Load from "../../components/Load/Load";
import BannerSlide from "../../components/Carrossel/BannerSlide";
import Movie from "../../components/Movie";
import Star from "../../components/Star";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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

      <Swiper modules={[Autoplay]} autoplay={{ delay: 2000 }}>
        {filme.map((item, id) => (
          <SwiperSlide key={id}>
            <BannerSlide
              title={item.title}
              star={item.vote_average}
              id={item.id}
              top={id + 1}
              description={item.overview}
              pagina={"/assistirfilme/"}
              img={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <S.SubTitle>
        Os Melhores Filmes Estão Aqui! <span>Cine Flix!</span>
      </S.SubTitle>
      <S.GridContainer>
        {filme.map((item, id) => (
          <>
            <Movie
              rota={"/assistirfilme/"}
              // star={`${Math.round(item.vote_average)}.0`}
              id={item.id}
              title={item.title}
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
    </>
  );
}
