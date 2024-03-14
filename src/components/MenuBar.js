import { styled } from "styled-components";
import { FaGithub, FaWhatsapp  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";

export default function MenuBar() {
  const navButtons = ['Home', 'Sobre', 'Projetos', 'Serviços', 'Avaliações']

  return (
    <MenuContainer>
      <ContactSection>
        <FaGithub />
        <FaWhatsapp />
        <SiGmail />
      </ContactSection>
      <NavMenu>
        {navButtons.map(content => {
          return (
            <button 
              key={content} 
            >
              <Link to={`${content.toLowerCase()}Section`} smooth={true} duration={300}>
                {content}
              </Link>
            </button>
          )
        })}
      </NavMenu>
    </MenuContainer>
  );
}

const MenuContainer = styled.header`
  width: 100%;
  height: 50px;
  background-color: black;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 90%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  z-index:10
`;

const ContactSection = styled.section`
  width: 50%;
  height: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
  gap: 20px;

  >svg{
    color: white;
    font-size: 28px;
    transition: color 0.5s;

    &:hover{
      cursor: pointer;
    }

    &:nth-of-type(1):hover{
      color: #7E44C4;
    }

    &:nth-of-type(2):hover{
      color: #51E461;
    }

    &:nth-of-type(3):hover{
      color: #EF5856;
    }
  }

  
`;

const NavMenu = styled.section`
  width: 50%;
  height: inherit;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;

  >button{
    height: inherit;
    width: 150px;
    border: none;
    background-color: inherit;
    color: #FFFFFF;
    font-family: "Nunito Sans", sans-serif;
    font-size: 20px;
    font-weight: 600;
    transition: background-color 0.5s, font-weight 0.5s;

    &:hover{
      background-color: #4f4f4f;
      font-weight: 800;
      cursor: pointer;
    }
  }
`;