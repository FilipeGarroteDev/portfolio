import styled from "styled-components";
import PageStyledFooter from "../../components/PageStyledFooter";
import PageStyledHeader from "../../components/PageStyledHeader";

export default function Projects() {   

  return (
    <>
      <PageStyledHeader position={2}/>
      <MainContainer id='projetosSection'>
          <h1>Projetos</h1>

      </MainContainer>
      <PageStyledFooter position={3}/>
    </>
  );
}

const MainContainer = styled.main`
  padding-top: 100px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(40deg, #3f3b3b, #848282);
  overflow: hidden;

  >h1{
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: "Noto Sans", sans-serif;
    font-size: 38px;
    font-weight: 800;
    color: #d1cdcd;

    >span{
      text-decoration: line-through;
      font-weight: 400;
    }
  }
`
