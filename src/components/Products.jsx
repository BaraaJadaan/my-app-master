import styled from 'styled-components';
import { popularProducts } from './data';
import Product from './Product';
import Fade from 'react-reveal/Fade';
import Grid from '@mui/material/Grid';

const Container = styled.div`  
padding: 30px;
  
`;
const Products = () => {
  return (
    <Container>
      <h1 className="t2">Featured Products</h1>
      <Grid container spacing={1}>
        {popularProducts.map((item) => (
          <Grid item xs={3}>
            <Fade bottom>
              <Product item={item} key={item.id} />
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
