import React from 'react';
import Carousel from './Carousel';
import MyPhotos from './MyPhotos';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <div>
                <Carousel></Carousel>
            </div>


            <div>

                <Services></Services>
            </div>


            <div>
                <MyPhotos></MyPhotos>
            </div>
        </div>
    );
};

export default Home;