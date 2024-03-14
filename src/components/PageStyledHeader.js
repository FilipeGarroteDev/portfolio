import { styled } from "styled-components";


export default function PageStyledHeader({position = 1}) {
  const topDistance = window.innerHeight;

  return (
    <FooterContainer topDistance={topDistance} position={position}>
      <div></div>
    </FooterContainer>
  );
}

const FooterContainer = styled.header`
  width: 100%;
  height: 100px;
  top: ${props => (props.topDistance*props.position)+'px'};
  left: 0;
  display: flex;
  justify-content: flex-end;
  position: absolute;

  >div{
    width: 55%;
    height: 25px;
    border-radius: 0px 0px 0px 30px;
    background-color: #3e3d3d;
  }
`;

