import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

export default function BannerSlide({
  img,
  title,
  pagina,
  id,
  description,
  top,
}) {
  return (
    <S.Banner>
      <S.Box>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`${pagina}${id}`}>Asssitir Agora!</Link>
      </S.Box>
      <S.Qualificacao>{top}º</S.Qualificacao>
      <img src={img} alt="img" />
    </S.Banner>
  );
}
