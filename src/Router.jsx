import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Error from "../src/pages/Error";
import Seach from "./pages/Seach/Seach";
import Filmes from "./pages/Filmes/Filmes";
import Series from "./pages/Series/Series";
import AssistirSerie from "./components/Card/Assistir/AssistirSerie";
import AssitirFilme from "../src/components/Card/Assistir/AssitirFilme";

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
          <Route path="/seach" element={<Seach />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
