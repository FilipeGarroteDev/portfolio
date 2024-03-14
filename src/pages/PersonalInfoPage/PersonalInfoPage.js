import styled from "styled-components";

export default function PersonalInfoPage() {
   

  return (
    <MainContainer id='sobreSection'>
        <h1>Quem é esse&nbsp;<span>Pokemon</span>&nbsp;DEV?</h1>

    </MainContainer>
  );
}

const MainContainer = styled.main`
  padding-top: 100px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(40deg, #242323, #151414);
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
