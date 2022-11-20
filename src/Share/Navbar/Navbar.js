import React, { useState } from 'react';
import { Bars3Icon, } from '@heroicons/react/24/outline'
const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Service', href: '#' },
    { name: 'Review', href: '#' },
    { name: 'Blog', href: '#' },
  ]
const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className='mb-5' >
             <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                
      {/* <svg
        className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
        viewBox="0 0 1155 678"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
            x1="1145.49"
            x2="-78.208"
            y1="2.177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9189FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg> */}
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
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-indigo-500 font-bold text-2xl hover:text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <a
              href="/"
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Log in
            </a>
          </div>
        </nav>
       
      </div>
    </div>
        </div>
    );
};

export default Navbar;