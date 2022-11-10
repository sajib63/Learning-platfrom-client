import React from 'react';
import toast from 'react-hot-toast';

import img from '../Components/imges/animation-3.gif'
import UseTitle from '../Hooks/UseTitle';

const AddServices = () => {
UseTitle('AddServices')
    const submitHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;
        const product = {  name, price, rating,  image, description };
      
        fetch("https://y-two-woad.vercel.app/service", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Add success");
            }

            form.reset();
            // console.log(data);
          })
          .catch((err) => console.log(err));
      };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-6 gap-8'>
            <div>
              <img src={img} alt="" />
            </div>

            <div>
                <div>
                    <form onSubmit={submitHandle} className="">
                        <h1 className="text-green-700 text-center text-3xl my-3 font-semibold">
                            Add Product
                        </h1>
                        <input
                            type="text"
                            placeholder="Product title"
                            name="name"
                            className="input input-bordered input-md w-full my-2 h-16"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Price"
                            name="price"
                            className="input input-bordered block  mt-4 input-md h-16 w-full"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Rating"
                            name="rating"
                            className="input input-bordered block mt-4 input-md h-16 w-full"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Photo URL"
                            name="image"
                            className="input input-bordered block  mt-4 input-md h-16 w-full"
                            required
                        />
                        <textarea
                            placeholder="Description"
                            type="text"
                            className="mt-5 input input-bordered input-lg w-full h-36"
                            name="description"
                            required
                        ></textarea>
                        <div className="flex justify-center my-3">
                            <button className="btn bg-green-700">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;