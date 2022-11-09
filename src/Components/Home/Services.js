import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-10 my-10'>

            {
                products.map(product => <ServicesCard key={product._id} product={product}></ServicesCard>)
            }

        </div>

        <div className='flex justify-center items-center '>

            <Link to='/totalServices' className='btn bg-green-600 border-0'>See All</Link>
        </div>
    </div>
    );
};

export default Services;