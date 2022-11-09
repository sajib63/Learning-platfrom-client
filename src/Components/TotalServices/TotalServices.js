import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TotalServiceCard from './TotalServiceCard';

const TotalServices = () => {
    const allPhotos=useLoaderData()
    return (
        <div>
            

            <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-10 my-10'>
                {
                    allPhotos?.map(photos=><TotalServiceCard key={photos._id} photos={photos}></TotalServiceCard>)
                }
            </div>
        </div>
    );
};

export default TotalServices;