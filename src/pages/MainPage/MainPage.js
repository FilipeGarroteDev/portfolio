import { useEffect, useState } from "react";
import styled from "styled-components";

export default function MainPage() {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX - 25)
    setCursorY(e.pageY - 25)
  })

  return (
    <MainContainer>
      <Cursor cursorX={cursorX} cursorY={cursorY}>.</Cursor>
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
  background-color: #474343;
  cursor: none;
`

const GreetingsBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 70%;
  height: 50%;
  color: #e2dddd;

  >span{
    font-family: "Nunito Sans", sans-serif;
    font-size: 32px;
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
    font-size: 18px;
    font-weight: 200;
    font-style: normal;
    margin-top: 25px;
  }


`

const Cursor = styled.div`
  font-size: 25px;
  box-sizing: border-box;
  color: white;
  width: 50px;
  height: 50px;
  position: fixed;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${props => props.cursorX+'px'};
  top: ${props => props.cursorY+'px'};
  border: 1px solid white;
  border-radius: 50px;
`
