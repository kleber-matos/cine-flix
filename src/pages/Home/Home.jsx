import * as S from "./style";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

// Components
import Movie from "../../components/Movie";
import Load from "../../components/Load/Load";
import Header from "../../components/Header/Header";
import BannerSlide from "../../components/Carrossel/BannerSlide";

// Swiper / carrossel
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer/index.jsx";

export default function Home() {
  // States
  const [page, setPage] = useState(1);
  const [filme, setFilme] = useState([]);
  const [load, setLoad] = useState(true);

  // Request
  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=${page}`
      );
      setFilme(dados.data.results);
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

  //Genre Movies
  const action = filme.filter((movie) => movie.genre_ids[0] < 20);
  const family = filme.filter((movie) => movie.genre_ids[0] > 30);

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
              img={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <S.SubTitle>
        The Best Films<span>Cine Flix!</span>
      </S.SubTitle>

      <Swiper
        spaceBetween={50}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        {action.map((item, id) => (
          <>
            <SwiperSlide>
              <Movie
                key={id}
                rota={"/assistirfilme/"}
                id={item.id}
                selo={"New"}
                title={item.title}
                imagem={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                star={item.vote_average}
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>

      <S.SubTitle>
        Watch<span>Now!</span>
      </S.SubTitle>

      <Swiper
        spaceBetween={50}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        {family.map((item, id) => (
          <>
            <SwiperSlide>
              <Movie
                rota={"/assistirfilme/"}
                id={item.id}
                title={item.title}
                star={item.vote_average}
                imagem={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>

      <S.SubTitle>
        All<span>Movies!</span>
      </S.SubTitle>

      <S.GridContainer>
        {filme.map((item, id) => (
          <>
            <Movie
              rota={"/assistirfilme/"}
              // star={`${Math.round(item.vote_average)}.0`}
              id={item.id}
              title={item.title}
              star={item.vote_average}
              imagem={`https://image.tmdb.org/t/p/original${item.poster_path}`}
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
      <hr />
      <Footer />
    </>
  );
}
