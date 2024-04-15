import styled from "styled-components";

export const Card = styled.div`
  border: solid;
  width: 25vw;
  max-width: 300px;
  height: 55vh;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-align: center;
  margin: 1rem;
  margin-top: 2rem;

  img {
    width: 100%;
    height: 70%;
    background-image: url("https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif/@@images/image.gif");
  }

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const Assistir = styled.section`
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 95vh;

  img {
    width: 30%;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 40vh;
    }
  }
`;
export const About = styled.section`
  width: 60%;
  border: solid;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Iframe = styled.div`
  iframe {
    height: 100vh;
    width: 100%;
  }

  @media (max-width: 700px) {
    iframe {
      height: 40vh;
    }
  }
`;

export const Button = styled.a`
  background-color: red;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  font-weight: 600;

  @media (max-width: 700px) {
    width: 100%;
    height: 6vh;
    margin-bottom: 1rem;
  }
`;
