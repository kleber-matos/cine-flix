import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

export default function CardSerie({ title, imagem, id }) {
  return (
    <S.Card>
      <Link to={`/assitirserie/${id}`}>
        <img src={imagem} alt={title} />
        <h2>{title}</h2>
      </Link>
    </S.Card>
  );
}
