import React, { useEffect, useState } from 'react';

import TotalServiceCard from './TotalServiceCard';

const TotalServices = () => {
    const [allPhotos, setAllPhotos]=useState([]);
    useEffect(()=>{
        fetch('https://y-two-woad.vercel.app/totalServices')
        .then(res => res.json())
            .then(data => setAllPhotos(data))
    },[])
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