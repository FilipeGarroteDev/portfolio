import { styled } from "styled-components";


export default function PageStyledFooter({position = 1}) {
  const topDistance = window.innerHeight

  return (
    <FooterContainer topDistance={topDistance} position={position}>
      <div></div>
    </FooterContainer>
  );
}

const FooterContainer = styled.header`
  width: 100%;
  height: 100px;
  top: ${props => (props.topDistance*props.position-25)+'px'};
  left: 0;
  display: flex;
  align-items: flex-start;
  position: absolute;

  >div{
    width: 55%;
    height: 25px;
    border-radius: 0px 30px 0px 0px;
    background-color: #878787;
  }
`;

