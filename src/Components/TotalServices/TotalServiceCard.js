import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TotalServiceCard = ({photos}) => {
    const { name, image, description, price, rating , _id} = photos;
    return (
        <div className="card bg-base-100 shadow-xl">

            <PhotoProvider>
                <PhotoView src={image}>
                    <img src={image} alt="" />
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title text-green-700 font-semibold">{name}</h2>
                <p>{description.slice(0, 100) + "..."}</p>
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

                    <Link to={`/service/${_id}`} className="btn bg-green-600 border-0">Details</Link>

                </div>
            </div>

           
        </div>
    );
};

export default TotalServiceCard;