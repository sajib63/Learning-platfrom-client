import React, { useContext } from 'react';

import image1 from '../imges/1.jpg'
import image2 from '../imges/2.jpg'
import image3 from '../imges/3.jpg'
import image4 from '../imges/4.jpg'
import image5 from '../imges/5.jpg'
import image6 from '../imges/6.jpg'
import image7 from '../imges/7.jpg'
import image8 from '../imges/8.jpg'
import image9 from '../imges/9.jpg'
import image10 from '../imges/10.jpg'
import image11 from '../imges/11.jpg'
import image12 from '../imges/12.jpg'
import { AuthContext } from '../../UserContext/UserContext';
const MyPhotos = () => {

    const {loader}=useContext(AuthContext)
    if(!loader){
        return <div class="text-center">
        <div role="status">
            <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    };
    return (
        <div className="px-4 py-16 mx-auto">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                    <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute text-green-700 top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                        <defs>
                            <pattern
                                id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                                x="0"
                                y="0"
                                width=".135"
                                height=".30"
                            >
                                <circle cx="1" cy="1" r=".7" />
                            </pattern>
                        </defs>
                        <rect
                            fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                            width="52"
                            height="24"
                        />
                    </svg>
                    <span className="relative text-green-500 ">Welcome</span>
                </span>{' '}
                To My   Favourite   <span className='text-green-500'>  Photos</span>
            </h2>
           
        </div>


        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">


            <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={image1}
                        alt="Person"
                    />

                   
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-10">




                    </div>
                </div>
            </div>
            <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={image2}
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-10">




                    </div>
                </div>
            </div>
            <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={image3}
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-10">




                    </div>
                </div>
            </div>
            <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={image4}
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-10">




                    </div>
                </div>
            </div>
            <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={image5}
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-10">




                    </div>
                </div>
            </div>
            <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={image6}
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-10">




                    </div>
                </div>
            </div>
            <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={image7}
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-10">




                    </div>
                </div>
            </div>
            <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={image8}
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-10">




                    </div>
                </div>
            </div>
            <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={image9}
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-10">




                    </div>
                </div>
            </div>
            <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={image10}
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-10">




                    </div>
                </div>
            </div>
            <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={image11}
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-10">




                    </div>
                </div>
            </div>
            <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={image12}
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-10">




                    </div>
                </div>
            </div>


        </div>
    </div>
    );
};

export default MyPhotos;