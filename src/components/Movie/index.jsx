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
            src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Lightness_rotate_36f_cw.gif"
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
