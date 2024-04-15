import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

export default function CardFilme({ title, imagem, id }) {
  return (
    <S.Card>
      <Link to={`/assistirfilme/${id}`}>
        <img src={imagem} alt={title} />
        <h2>{title}</h2>
      </Link>
    </S.Card>
  );
}
