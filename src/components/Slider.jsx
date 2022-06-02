import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Styles/Slider.css';
import { bigSlider } from '../Data';

const responsiveImageHero = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Slider2() {
  return (
    <Slide>
      <Carousel
        className="slide"
        showDots
        infinite
        containerClass="container"
        slidesToSlide={1}
        responsive={responsiveImageHero}
      >
        {bigSlider.map((image) => {
          return (
            <img
              draggable={false}
              src={image.img}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
            />
          );
        })}
      </Carousel>
    </Slide>
  );
}
