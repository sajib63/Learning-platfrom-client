import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';


const ReviewEdit = () => {
    
    const getData=useLoaderData();

    const [user, setUser]=useState('')

   
     const handleSave=event=>{
        event.preventDefault();

        fetch(`http://localhost:5000/review/${getData._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((res) => res.json())
      .then((data) => {
        
        toast.success("Review Edit Successfully ");

       
      })
      .catch((err) => {
        toast.error(err.message);
      });

      

     }


     const handleInputChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }

    return (
       <form onSubmit={handleSave} className="my-10 ">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            readOnly
            defaultValue={getData?.name}
            className="input input-bordered input-md w-full "
            required
          />
          <input
            type="email"
            name="email"
            readOnly
            defaultValue={getData?.email}
            placeholder="Your Email"
            className="input input-bordered input-md w-full mt-3"
            required
          />
          <input
            type="text"
            name="message"
            onChange={handleInputChange}
            placeholder="Your Massage "
            className="input input-bordered input-md w-full mt-3"
            required
          />
          <div className="flex justify-center mt-3">
            <button className="btn border-0 w-full bg-green-600">Save Review</button>
          </div>
        </form>
    );
};

export default ReviewEdit;