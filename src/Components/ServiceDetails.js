import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ServiceDetails = () => {
    const allService = useLoaderData();
    const { name, image, description, price, rating } = allService;
 
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

            <div>
                <div className="card bg-base-100 shadow-xl">

                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img src={image}  alt=""  className='h-4/6'/>
                        </PhotoView>
                    </PhotoProvider>

                    <div className="card-body">
                        <h2 className="card-title text-green-700 font-semibold">{name}</h2>

                        <div className='flex justify-between'>
                            <p className='text-xl font-semibold '>Price: ${price}</p>

                            <div className='flex justify-between items-center '>
                                <p className='text-xl font-semibold'>{rating}</p>
                                <span className='flex'>
                                    <FaStar className='text-green-600'></FaStar>
                                    <FaStar className='text-green-600'></FaStar>
                                    <FaStar className='text-green-600'></FaStar>
                                    <FaStar className='text-green-600'></FaStar>
                                    <FaStarHalfAlt className='text-green-600'></FaStarHalfAlt>

                                </span>
                            </div>

                        </div>
                        <div className="card-actions justify-end">
                            <p>{description}</p>

                        </div>
                    </div>


                </div>
            </div>

            <div>

            </div>


        </div>
    );
};

export default ServiceDetails;