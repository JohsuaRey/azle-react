import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
    const heroStyle = {
        background: "linear-gradient(#003a077b, #003a077b, url('/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    // <section
    //   className="min-h-screen w-auto bg-cover bg-center bg-no-repeat"
    //   style={{ backgroundImage: `url('/mesh-gradient.jpg')` }} // Update the path accordingly
    // >
    //   <div className='flex items-center justify-center text-center gap-4 flex-col pt-40 sm:pt-60 max-w-[950px] mx-auto px-4'>
    //     <h3 className='sm:text-5xl text-4xl font-bold leading-[60px]'>
    //       Together for a Greener Future
    //     </h3>
    //     <p className='pt-4 text-xl tracking-wide'>
    //       Join us at Greenfuture in the fight against climate change. Every small action counts. Be part of the solution, and let's create a sustainable world for generations to come.
    //     </p>

    //     <div className='flex justify-center items-center mt-8'>
    //       <svg className="w-[48px] animate-bounce h-[48px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    //         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 19V5m0 14-4-4m4 4 4-4"/>
    //       </svg>
    //     </div>
    //   </div>
    // </section>

    // <section
    // className="min-h-screen w-auto bg-cover bg-center bg-no-repeat"
    // style={{ backgroundImage: `url('/bg.png')` }}
    // >
    //     <div className="absolute inset-0 opacity-30" />
    //     <div className='flex items-center justify-center text-center gap-4 flex-col pt-40 sm:pt-60 max-w-[950px] mx-auto px-4 relative'>
            //  <h3 className='sm:text-5xl text-4xl font-bold leading-[60px] text-green-700'>
            //      Together for a Greener Future
            //  </h3>
            //  <p className='pt-4 text-xl tracking-wide text-white'>
            //      Join us at Greenfuture in the fight against climate change. Every small action counts. Be part of the solution, and let's create a sustainable world for generations to come.
            //  </p>
    
    //      <div className='flex justify-center items-center mt-8'>
    //              <svg className="w-[48px] animate-bounce h-[48px] text-gray-800 dark:text-" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    //                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 19V5m0 14-4-4m4 4 4-4"/>
    //              </svg>
    //          </div>
    //      </div>
    // </section>

    <section
        className="min-h-screen w-auto bg-cover bg-center bg-no-repeat"
        style={heroStyle}
        >
    <Navbar/>
    {/* Overlay for brightness adjustment */}
    <div className="absolute inset-0 bg-black opacity-30" /> {/* Adjust the opacity value to control brightness */}

    <div className='relative z-10 flex items-center justify-center text-center gap-4 flex-col pt-40 sm:pt-60  max-w-[950px] mx-auto px-4'>
                <h3 className='sm:text-5xl text-4xl font-bold leading-[60px] text-green-200'>
                    Together for a Greener Future
                </h3>
                <p className='pt-4 text-xl tracking-wide text-white'>
                    Join us at Greenfuture in the fight against climate change.
                </p>
                
                <div className='flex justify-center items-center mt-8'>
                <a className="text-white hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-white dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Volunteer now</a>
                    {/* <svg className="w-[48px] animate-bounce  h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 19V5m0 14-4-4m4 4 4-4"/>
                    </svg> */}
                </div>
            </div>
</section>

  );
};

export default Hero;
