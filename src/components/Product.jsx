import styled from 'styled-components';
import './Styles/Product.css';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { popularProducts } from './data';
import {
  Link,
} from "react-router-dom";

const Info = styled.div`
  position: relative;
  opacity: 0;
  transition: all 0.5s ease;
  display: flex;
  justify-content: space-between;
`;

const WishIcon = styled.div`
  width: 40px;
  height: 40px;
  opacity: 0;
  z-index: 9;
  position: absolute;
  top:8px;
  left:8px;
  color:gray;
  cursor:pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.05);
  }
 `;

const Container = styled.div`
  &:hover ${Info} {
    opacity: 1;
  }
  &:hover ${WishIcon} {
    background-color: #e9f5f5;

    opacity: 1;
  }
  position: relative;
`;

const WrappName = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  font-weight: 300;
  font-size: 25px;
  margin-left: 6px;
`;
const RatingStyle = styled.div`
  display: flex;
  align-items: center;
`;
const Counter = styled.p`
  font-weight: 200px;
`;
const IconsWrapper = styled.div`
  position: absolute;
  right: 5px;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const [value, setValue] = useState(2);

  return (
    <Container>
      <div className="wrapper">
        <div className="container">
          <Tooltip TransitionComponent={Zoom} title="Add to Wishlist">
            <WishIcon>
              <FavoriteBorderIcon sx={{ width: '40px', height: '35px' }} />
            </WishIcon>
          </Tooltip>
          <div className="top">
           <Link to={`/ProductList/details/${item.id}`}><img className="img" src={item.img} /></Link>
          </div>
          <div className="bottom">
            <Info>
              <WrappName>
                <Name>Laptop</Name>
                <RatingStyle>
                  <Rating
                    sx={{
                      padding: '2px',
                    }}
                    name="read-only"
                    value={value}
                    readOnly
                  />
                  <Counter>(32)</Counter>
                </RatingStyle>
              </WrappName>
              <IconsWrapper>
                <Icon>
                  <ShoppingCartCheckoutOutlined />
                </Icon>
              </IconsWrapper>
            </Info>
          </div>
        </div>
        <div class="inside">
          <div class="icon">
            <i class="material-icons">info</i>
          </div>
          <div class="contents"></div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
