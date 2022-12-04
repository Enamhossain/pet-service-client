import React, { useContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';
import useTitle from '../../hook/useTitle';



const Login = () => {
    const [error, setError] = useState('');
    const {login,googleLogin} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || '/';
    
  
    useTitle('login')
     
    const LoginUser= event =>{
       event.preventDefault()
       const form = event.target 
       const email = form.email.value;
       const password= form.password.value;
       login(email,password)
       .then(result=>{
        const user  = result.user;
        console.log(user);
        form.reset();
        navigate(from, {replace: true});
        setError('')
    })
    .catch(error =>{
        
    console.error(error)
    setError(error.message)
    
    });
       
}    
       
        
   

    const notify = () => toast.success('Here is your toast.');
    
    const googleuserLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .then(data => {
            console.log(data)
            
        })
         .catch(error => console.log(error))
    }

    
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
             <ToastContainer />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
         
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login Account
                    </h1>
                    <form onSubmit={LoginUser} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email Address" required />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button onClick={notify}  type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log In  <Toaster position='center' /></button>
                       
                        <button onClick={()=> googleuserLogin() } type="submit" className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-800">Google </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            You don't have Any Account <Link to="/singUp" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sing Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Login;