import styled from "styled-components";
import PageStyledFooter from "../../components/PageStyledFooter";
import profile from "../../assets/profile.png"

export default function HomePage() {
   
  return (
    <>
      <MainContainer id='homeSection'>

        <GreetingsBox>
          <span>Olá, meu nome é <strong>Filipe Garrote</strong><br></br> e eu construo soluções web à sua medida.</span>
          <p>Sou desenvolvedor web fullstack, mas, acima de tudo, sou um resolvedor de problema. Vamos tirar sua ideia do papel e construir uma soulução inovadora juntos?</p>
        </GreetingsBox>
        <ImageBox>
          <div><img src={profile} alt="profileImage" /></div>
          <div><img src={profile} alt="profileImage" /></div>
          <div><img src={profile} alt="profileImage" /></div>
          <div><img src={profile} alt="profileImage" /></div>
          
        </ImageBox>

      </MainContainer>
      <PageStyledFooter />
    </>
  );
}

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(40deg, #3f3b3b, #848282);
  overflow: hidden;
  padding: 0 100px 0 100px;
  gap: 300px;
`



const GreetingsBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
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
    width: 100%;
    font-size: 20px;
    font-weight: 200;
    font-style: normal;
    margin-top: 25px;
  }


`


const ImageBox = styled.div`
  position: relative;
  width: 200px;
  height: 300px;

  >div{
    position: absolute;
    width: 200px;
    height: 300px;
    border-radius: 5px;
    overflow: hidden;

    >img{
      width: 100%;
      height: 100%;
      opacity: 0%;
      transition: opacity 1s;

      &:hover{
        opacity: 100%;
      }
    }
  }

  >div:nth-of-type(1){
    position: absolute;
    z-index: 4;
    width: 200px;
    height: 300px;
    box-shadow: 0px 0px 40px 20px rgba(0, 0, 0, 0.5);

    >img{
      opacity: 100%
    }
  }

  >div:nth-of-type(2){
    bottom: 20px;
    right: -20px;
    background-color: #d1d1d1;
    z-index: 3;
    transition: bottom 1s, right 1s, transform 1s;

    &:hover{
      bottom: 120px;
      right: -120px;
      transform: rotate(15deg);
    }
  }

  >div:nth-of-type(3){
    bottom: 40px;
    right: -40px;
    background-color: #868686;
    z-index: 2;
    transition: bottom 1s, right 1s, transform 1s;

    &:hover{
      bottom: 140px;
      right: -140px;
      transform: rotate(15deg);
    }
  }

  >div:nth-of-type(4){
    bottom: 60px;
    right: -60px;
    background-color: #3f3f3f;
    transition: bottom 1s, right 1s, transform 1s;

    &:hover{
      bottom: 160px;
      right: -160px;
      transform: rotate(15deg);
    }
  }
`
