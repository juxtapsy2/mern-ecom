import React from 'react';
import Slider from 'react-slick';
import {slides} from '../../constants';
import {Image} from 'antd';


export const ImageSlider = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };
    return (
      <Slider {...settings}>
          {slides.map((slide, index) => (
              <div key={index}>
                  <Image src={slide} alt={`Slide ${index + 1}`} preview={false} style={{height: 350, aspectRatio: 'calc(768/19)', alignItems: 'center'}}/>
              </div>
          ))}
      </Slider>
    )
}
