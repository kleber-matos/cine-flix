/** @format */
import carregando from "../../assets/load.gif";
import * as S from "./style";

import React from "react";

export default function Load() {
  return (
    <S.Load>
      <img src={carregando} alt="" />
    </S.Load>
  );
}
