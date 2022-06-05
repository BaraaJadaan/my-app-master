import styled from "styled-components";
import NavBar from "./NavBar";
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { mobile } from "../Responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  max-height: 100%;
    max-width: 100%;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 900;
  font-size: large;
  
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;


const Button = styled.button`
  background-color: indigo;
  color: white;
  font: 300 11px/1.4 'Helvetica Neue', sans-serif;
    font-weight: 900;
    border: 0;
    border-radius: 40px;
    font-size:large;
    letter-spacing:0.8px;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    transition: .3s;
    cursor: pointer;
    

  &:hover{
    background-color: rgb(255, 255, 255);
    color: black
  }
`;

const price= '$59'
const value= '5'
const Product = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/19TYCy3/10160855-preview-rev-1.png"/>
        </ImgContainer>
        <InfoContainer>
          <Title>Zelda: Breath of the Wild</Title>
          <Desc>
          Step into a world of discovery, exploration and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.
          it's an action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. The game is an installment of The Legend of Zelda series and is set at the end of its timeline.
          </Desc>
          <Rating style={{paddingTop: '14px'}} name="read-only" value={value}  readOnly />
          <FilterContainer>
          <Price onInput={e => console.log(e.currentTarget.textContent)} contentEditable={true}>{price}</Price>
          </FilterContainer>
          <Tooltip TransitionComponent={Zoom} title="Add to Cart">
            <Button><ShoppingCartRoundedIcon style={{transform: 'translate(0px, 3px)'}}/></Button>
          </Tooltip>
          
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
