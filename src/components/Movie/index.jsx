import React from "react";
import { Link } from "react-router-dom";
// /assistirfilme/

export default function index({ id, imagem, title, rota, star }) {
  return (
    <div>
      <Link to={`${rota}${id}`}>
        <img src={imagem} alt={title} />
        <div>
          <div className="title">
            <p>{star}</p>
            <p>{title}</p>
            <button>assistir agora</button>
          </div>
        </div>
      </Link>
    </div>
  );
}
