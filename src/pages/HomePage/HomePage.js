import styled from "styled-components";

export default function HomePage() {
   
  return (
      <MainContainer id='homeSection'>

        <GreetingsBox>
          <span>Olá, meu nome é <strong>Filipe Garrote</strong><br></br> e eu construo soluções web à sua medida.</span>
          <p>Sou desenvolvedor web fullstack, mas, acima de tudo, sou um resolvedor de problema. Vamos tirar sua ideia do papel e construir uma soulução inovadora juntos?</p>
        </GreetingsBox>

      </MainContainer>
  );
}

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(40deg, #3f3b3b, #848282);
  overflow: hidden;
`



const GreetingsBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  height: 50%;
  color: #e2dddd;

  >span{
    font-family: "Nunito Sans", sans-serif;
    font-size: 38px;
    font-weight: 400;
    font-style: normal;

    >strong{
      font-family: "Noto Sans", sans-serif;
      font-weight: 800;
      font-style: normal;
    }
  }

  >p{
    font-family: "Nunito Sans", sans-serif;
    width: 50%;
    font-size: 20px;
    font-weight: 200;
    font-style: normal;
    margin-top: 25px;
  }


`
