import React from 'react';

const Hero = () => {
    return (
      <div>
        <div className='relative  contrast-125 bg-[url(https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_960_720.jpg)]  bg-cover bg-center bg-no-repeat'>

            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40  ">
              <div>
                <div className=" "  >
                  <h1 className="text-4xl  font-bold tracking-tight sm:text-center text-white  sm:text-6xl">
                  The World's <span className="text-orange-400 font-extrabold">Best Team for Pet Care </span>Services
                  </h1>
                  <p className="mt-6 text-lg leading-8  font-bold text-gray-100 sm:text-center ">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <a
                      href="/"
                      className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                    >
                      Service
                      <span className="text-indigo-200" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
                   
                  </div>
                </div>
                
              </div>
            </div>

          </div>
         
         

            

          </div>
    );
};

export default Hero;