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



const deleteHandle=data=>{
    const agree=window.confirm(`are you sure to delete ${data.name}`)

    if(agree){
        fetch(`http://localhost:5000/delete/${data._id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
        })
        .catch(error=> {
            console.log(error);
        })
    }
}

    return (
        <div>
          {
            users?.map(review=> <MyReviewCard key={review._id} review={review}
                deleteHandle={deleteHandle}
            ></MyReviewCard>)
          }
        </div>
    );
};

export default MyReview;