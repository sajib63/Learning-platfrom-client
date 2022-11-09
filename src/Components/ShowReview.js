import React from 'react';

const ShowReview = ({rv}) => {
    return (
        <div className="card w-full bg-gray-300 text-black shadow-xl my-4">
        <div className="card-body  text-center">
          <div className='flex justify-between items-center '>
             <div className='flex justify-center '>
             <h3 className='text-2xl font-bold mx-3 '>{rv?.name}</h3>
              <img className='h-15 w-10 rounded-full' alt='' src={rv?.photo}/>
             </div>

             <div className='flex justify-center '>
             <h3 className='text-2xl font-bold mx-3 '>{rv?.serviceName}</h3>
              <img className='h-15 w-10 rounded-full' alt='' src={rv?.image}/>
             </div>
          </div>
          <p className='text-center font-bold'>Review:</p>
          <p>{rv?.message}</p>
        </div>
      </div>
    );
};

export default ShowReview;