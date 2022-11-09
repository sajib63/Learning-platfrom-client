import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../UserContext/UserContext';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {

    const {user}=useContext(AuthContext)

    const [users, setUsers]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myReview?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=> setUsers(data))
    },[user?.email])


    return (
        <div>
          {
            users?.map(review=> <MyReviewCard key={review._id} review={review}></MyReviewCard>)
          }
        </div>
    );
};

export default MyReview;