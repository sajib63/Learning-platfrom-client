import React, { useEffect, useState } from 'react';

const Services = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Services;