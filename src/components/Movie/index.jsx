import React from "react";
import { Link } from "react-router-dom";
import Star from "../../components/Star";
import { FaPlay } from "react-icons/fa";

import * as S from "./style";

export default function index({ id, imagem, title, rota, star }) {
  return (
    <S.Card>
      <Link to={`${rota}${id}`}>
        <div className="imagem">
          <img src={imagem} alt={title} />
          <img
            className="load"
            src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif"
            alt="Load"
          />
          <FaPlay className="icon" />
        </div>

        <p>{title}</p>
      </Link>
      <Star qtd={star} />
    </S.Card>
  );
}
