import styled from "styled-components";

export default function index() {
  const Container = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 5rem;
    }
  `;

  return (
    <Container>
      <h2>404</h2>
      <h3>Pagina não encontrada!</h3>
    </Container>
  );
}
