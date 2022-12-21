import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigation } from 'react-router-dom';
import { Loader } from '../Hooks/Loader';

import UseTitle from '../Hooks/UseTitle';
import { AuthContext } from '../UserContext/UserContext';
import MyReviewCard from './MyReviewCard';



const MyReview = () => {
UseTitle('MyReview')
    const {user}=useContext(AuthContext)

    const [users, setUsers]=useState([]);
    const navigation=useNavigation();

    

    useEffect(()=>{
        fetch(`https://y-two-woad.vercel.app/myReview?email=${user?.email}`,{
            headers:{
                authorization:`Barer ${localStorage.getItem("token")}`
            }
        })
        .then(res=>res.json())
        .then(data=> {
            const remaining=[...data].reverse();
        setUsers(remaining)
        })
    },[user?.email])

    if(navigation.state === 'loading'){
        return <Loader></Loader>
    }

const deleteHandle=datas=>{
    const agree=window.confirm(`are you sure to delete ${datas.name}`)

    if(agree){
        fetch(`https://y-two-woad.vercel.app/delete/${datas._id}`,{
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
               users?.length===0 && <p className='text-center mt-28 md:mt-96 text-4xl text-green-600 lg:mt-96'>No reviews were added</p> 
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