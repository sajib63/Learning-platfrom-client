import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../Components/imges/animation-1.gif'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../UserContext/UserContext';
import toast from 'react-hot-toast';
import UseTitle from '../Hooks/UseTitle';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const { loginUser, googleLogin, gitLogin, loader } = useContext(AuthContext);

    UseTitle('Login');


    if (!loader) {
        return <div class="text-center">
            <div role="status">
                <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    }

    const CreateUser = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;

        const password = form.password.value;

        loginUser(email, password)
            .then(result => {

                const user=result.user;
                const currentUser={
                    email: user.email
                }

               

                fetch('https://y-two-woad.vercel.app/jwt',{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(currentUser)
                })
                .then(res=> res.json())
                .then(data=>{
                   localStorage.setItem("token", data.token)
                })
    


                toast.success('success')
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(`${error.message}`)

            })

    }


    const googleLogInHandle = () => {
        googleLogin()
            .then(result => {
             
                const user=result.user;
                const currentUser={
                    email: user.email
                }

               

                fetch('https://y-two-woad.vercel.app/jwt',{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(currentUser)
                })
                .then(res=> res.json())
                .then(data=>{
                   localStorage.setItem("token", data.token)
                })
    


                toast.success('success')
                
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(`${error.message}`)

            })

    }

    const gitLoginHandle = () => {
        gitLogin()

            .then(result => {
   
                const user=result.user;
                const currentUser={
                    email: user.email
                }

               

                fetch('https://y-two-woad.vercel.app/jwt',{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(currentUser)
                })
                .then(res=> res.json())
                .then(data=>{
                   localStorage.setItem("token", data.token)
                })
    


                toast.success('success')
                
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(`${error.message}`)

            })
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:mt-10 mt-0'>
            <div>
                <img alt='loginImg' src={loginImg}></img>
            </div>
            {/* login input */}
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-400 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={CreateUser} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="email" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email" id="username" placeholder="Email" required className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" required name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />

                    </div>
                    <button className="block w-full p-3 text-center rounded-sm bg-green-500 ">Log In</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={googleLogInHandle} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FaGoogle></FaGoogle>
                    </button>

                    <button onClick={gitLoginHandle} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <FaGithub></FaGithub>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                    <Link to='/register' className="underline dark:text-gray-100">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;