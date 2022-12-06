
import 'flowbite';
import React, { useContext,  } from 'react';
import { Bars3Icon, } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';

import { FaUserCircle } from 'react-icons/fa';


const Navbar = () => {
    
    const { user, logOut } = useContext(AuthContext)
  
     


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='mb-5' >
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">


            </div>
            <div className="px-6 pt-6 lg:px-8 pb-5">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex justify-center items-center lg:min-w-0 lg:flex-1" aria-label="Global">
                            <a href="/" className=" p-1.5">
                                <img className="h-32 mx-5" src="https://img.freepik.com/free-vector/cute-dog-cat-friend-cartoon_138676-2432.jpg?w=826&t=st=1668836467~exp=1668837067~hmac=8f522b4b4c70a81fa0ccbf613ec066558bbd2af02791c2fccdf5f54e43139d05" alt="" />
                            </a>
                            <span className="text-2xl  mx-auto text-indigo-600 font-bold">Cat-pats Care</span>
                        </div>
                            
                        <button  data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>


                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-10">
                            <h1 className='text-xl mr-4'>
                                {
                                    user?.uid ?
                                        <div className='hidden lg:flex  lg:flex-1 lg:justify-around lg:gap-x-10'>

                                            <li className='font-semibold list-none text-indigo-600 text-lg '><Link to='/'>Home</Link></li>
                                            <li className='font-semibold list-none text-indigo-600 text-lg '><Link to='/service'>Services</Link></li>
                                            <li className='font-semibold list-none text-indigo-600  '><Link to='/addservice'>Add Service</Link></li>
                                             
                                            <li className='font-semibold list-none text-indigo-600 text-lg '><Link to='/blog'>Blog</Link></li>
                                            <li className='font-semibold list-none text-indigo-600 text-lg '>
                                                <Link  to='/myReview'>Reviews</Link>
                                                </li>
                                          
                       
                                            <button onClick={handleLogOut} className="btn btn-error mr-2">Log out</button>
                                            <span>{user?.displayName}</span>

                                        </div>
                                        :
                                        <>
                                            <Link className='text-black decoration-none text-xl font-semibold px-5' to='/login'>Login</Link>
                                            <Link className='text-black decoration-none text-xl font-semibold px-5' to='/singUp'>Signup</Link>
                                        </>
                                }
                            </h1>
                            <p className="">{user?.photoURL?

                                <img className='rounded-full h-14 w-14' src={user?.photoURL} alt="" /> :
                                <FaUserCircle className='h-10 w-10'></FaUserCircle>
                            }

                            </p>

                        </div>

                    </nav>

                </div>
            </div>
        </div>
    );
};

export default Navbar;