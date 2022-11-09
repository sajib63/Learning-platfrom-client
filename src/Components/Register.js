import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import registerImg from '../Components/imges/animation-2.gif'
import { FaGoogle, FaGithub } from "react-icons/fa";

import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../UserContext/UserContext';

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const CreateUser=event=>{
        event.preventDefault();
        const form=event.target;
       
        const email=form.email.value;
    
        const password=form.password.value;

        createUser(email, password)
        .then(result=> {
      toast.success('success')
        })
        .catch(error=>{
            toast.error(`${error.message}`)
            
        })

    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:mt-10 mt-0'>
            <div>
                <img alt='loginImg' src={registerImg}></img>
            </div>
            {/* login input */}
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-400 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={CreateUser}  action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block dark:text-gray-400">Username</label>
                        <input type="text" name="username" id="username" required placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label for="username" className="block dark:text-gray-400">Username</label>
                        <input type="text" name="photoURL" required placeholder="photoURL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>



                    <div className="space-y-1 text-sm">
                        <label for="email" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email" id="email" placeholder="email" required className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" required placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        <div className="flex justify-end text-xs dark:text-gray-400">

                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded bg-green-500 ">Register</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">

                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                      <FaGoogle></FaGoogle>
                    </button>

                    
                   

                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                       <FaGithub></FaGithub>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account
                    <Link to="/login" className="underline dark:text-gray-100">Sign up</Link>
                </p>
            </div>
        </div>

    );
};

export default Register;