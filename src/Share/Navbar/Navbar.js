import React, { useState } from 'react';
import { Bars3Icon, } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
// const navigation = [
//     { name: 'Home',to='ho' },
//     { name: 'Service', href: '#' },
//     { name: 'Review', href: '#' },
//     { name: 'Blog', href: '#' },
//   ]
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems =
    <>
      <li className='font-semibold list-none text-indigo-600 text-lg '><Link to='/'>Home</Link></li>
      <li className='font-semibold list-none text-indigo-600 text-lg '><Link to='/allService'>Services</Link></li>
      <li className='font-semibold list-none text-indigo-600 text-lg '><Link to='/'>Review</Link></li>
      <li className='font-semibold list-none text-indigo-600 text-lg '><Link to='/'>Blog</Link></li>
    </>
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
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12 ">
              {
                navItems
              }
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center">
              <Link to='/login'
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Log in
              </Link>
              <Link to='/singUp'
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Register
              </Link>
            </div>
          </nav>

        </div>
      </div>
    </div>
  );
};

export default Navbar;