import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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



const deleteHandle=datas=>{
    const agree=window.confirm(`are you sure to delete ${datas.name}`)

    if(agree){
        fetch(`http://localhost:5000/delete/${datas._id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.acknowledged){

                const remaining=users.filter(usr=> usr._id !==datas._id )

                toast.success('Delete Successfully')
                setUsers(remaining)
            }
        })
        .catch(error=> {
            console.log(error);
        })
    }
}

    return (
        <div>
            {
               users.length===0 && <p className='text-center mt-28 md:mt-96 text-4xl text-green-600'>No reviews were added</p> 
            }
          
          {

            
            users?.map(review=> <MyReviewCard key={review._id} review={review}
                deleteHandle={deleteHandle}
            ></MyReviewCard>)
          }
        </div>
    );
};

export default MyReview;