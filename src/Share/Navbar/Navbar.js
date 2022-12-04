
import 'flowbite';
import React, { useContext, useState } from 'react';
import { Bars3Icon, } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';

import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const menuItems = <>
        <Link className='text-black decoration-none text-xl font-semibold px-5 ml-4' to='/'>Home</Link>
        <Link className='text-black decoration-none text-xl font-semibold px-5' to='/services'>Services</Link>
        <Link className='text-black decoration-none text-xl font-semibold px-5' to='/blogs'>Blog</Link>
    </>



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
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                            <h1 className='text-xl mr-4'>
                                {
                                    user?.uid ?
                                        <div className='hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12'>

                                            <li className='font-semibold list-none text-indigo-600 text-lg '><Link to='/'>Home</Link></li>
                                            <li className='font-semibold list-none text-indigo-600 text-lg '><Link to='/service'>Services</Link></li>
                                            <li className='font-semibold list-none text-indigo-600 text-lg '><Link to='/addservice'>Add Service</Link></li>
                                            <li className='font-semibold list-none text-indigo-600 text-lg '><Link to='/blog'>Blog</Link></li>

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