import React from 'react';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";


import image1 from '../../images/image-1.jpg'
import image2 from '../../images/image-2.jpg'
import image3 from '../../images/image-3.jpg'
import image4 from '../../images/image-4.jpg'

const Carousel = () => {
 
    return (
        <div className="carousel w-full h-3/6">
        <div id="slide1" className="carousel-item relative w-full">
          <img alt='' src={image2} className="w-full h-5/6" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a> 
            <a href="#slide2" className="btn btn-circle"><FaArrowRight></FaArrowRight></a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img alt='' src={image1} className="w-full h-5/6" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a> 
            <a href="#slide3" className="btn btn-circle"><FaArrowRight></FaArrowRight></a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img alt='' src={image3} className="w-full h-5/6" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a> 
            <a href="#slide4" className="btn btn-circle"><FaArrowRight></FaArrowRight></a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img alt=''src={image4} className="w-full h-5/6" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a> 
            <a href="#slide1" className="btn btn-circle"><FaArrowRight></FaArrowRight></a>
          </div>
        </div>
      </div>
    );
};

export default Carousel;