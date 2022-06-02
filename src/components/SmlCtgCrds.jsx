import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Styles/SmlCtgCrds.css';
import { allCategories } from '../Data';

import React, { Component } from 'react';

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: 'margin',
      infinite: false,
      slidesToShow: 6,
      swipeToSlide: true,
    };
    return (
      <div style={{ margin: '50px' }}>
        <h1 className="title">Categories</h1>
        <div>
          <Slider {...settings}>
            {allCategories.map((image) => {
              return ( 
                <div className="item">
                  <img className="image pop" draggable={false} src={image.img} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
