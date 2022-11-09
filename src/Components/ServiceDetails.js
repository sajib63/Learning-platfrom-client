import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AuthContext } from '../UserContext/UserContext';
import toast from 'react-hot-toast';
import ShowReview from './ShowReview';

const ServiceDetails = () => {
    const allService = useLoaderData();
    const navigate=useNavigate();
    const {user}=useContext(AuthContext);
    const { name, image, description, price, rating , _id} = allService;


  function ReviewHanlar(event) {
    event.preventDefault();
    if (!user) {
      toast.error("Plase Login");
      navigate("/login");
      return;
    }
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.massage.value;

    const review = {
      serviceID: _id,
      photo: user.photoURL,
      name,
      email,
       message,
    };
    //  post data
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Review Send Successfully ");

        form.reset();
      })
      .catch((err) => {
        toast.error(err.message);
      });
    // ...........
  }

  // get data .......

  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/review?serviceID=${_id}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  //


 
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

            <div>
                <div className="card bg-base-100 shadow-xl">

                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img src={image}  alt=""  className='h-4/6'/>
                        </PhotoView>
                    </PhotoProvider>

                    <div className="card-body">
                        <h2 className="card-title text-green-700 font-semibold ">{name}</h2>

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
                            <p>{description}</p>

                        </div>
                    </div>


                </div>
            </div>

        
            <div className=" my-5">
        <form onSubmit={ReviewHanlar} className="sendRiview">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            defaultValue={user?.displayName}
            className="input input-bordered input-md w-full "
            required
          />
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Your Email"
            className="input input-bordered input-md w-full mt-3"
            required
          />
          <input
            type="text"
            name="massage"
            placeholder="Your Massage "
            className="input input-bordered input-md w-full mt-3"
            required
          />
          <div className="flex justify-center mt-3">
            <button className="btn border-0 w-full bg-green-600">Add Review</button>
          </div>
        </form>

        <div className="view my-8">
          <div className="">
            {review.map((rv) => <ShowReview  key={rv._id} rv={rv}></ShowReview>)}
          </div>
        </div>
      </div>

        </div>
    );
};

export default ServiceDetails;