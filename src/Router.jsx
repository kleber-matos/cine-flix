import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Filmes from "./pages/Filmes/Filmes";
import Series from "./pages/Series/Series";
import AssitirFilme from "../src/components/Card/Assistir/AssitirFilme";
import AssistirSerie from "./components/Card/Assistir/AssistirSerie";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/assistirfilme/:id" element={<AssitirFilme />} />
          <Route path="/series" element={<Series />} />
          <Route path="/assitirserie/:id" element={<AssistirSerie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
