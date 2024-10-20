import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react';
import Footer from './Footer';
import ContactUs from './ContactUs';
import './animation.css';
import Hero from './Hero';
import UpcommingEvents from './UpcommingEvents';
const Homepage = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000
        });
      }, []);
      const heroStyle = {
        background: "linear-gradient(#003a079b, rgba(0, 58, 7, 0.7)), url('/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <section>
        {/* <Navbar/> */}
       <section
        className="min-h-screen w-auto bg-cover bg-center bg-no-repeat"
        style={heroStyle}
        >
            <Navbar/>
        <div className='relative z-10 flex items-center justify-center text-center gap-4 flex-col pt-40 sm:pt-60  max-w-[950px] mx-auto px-4'>
        <h3 className='sm:text-5xl text-4xl font-bold leading-[60px] text-white'>
                 Together for a Greener Future
             </h3>
             <p className='pt-4 text-xl tracking-wide text-white'>
                 Join us at Greenfuture in the fight against climate change. Every small action counts. Be part of the solution, and let's create a sustainable world for generations to come.
             </p>
           
            <div className='flex justify-center items-center mt-8'>
                <svg className="w-[48px] animate-bounce  h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 19V5m0 14-4-4m4 4 4-4"/>
                </svg>
            </div>
        </div>
        </section>
        
        {/* <Hero/> */}

        <section className='w-auto min-h-[90vh] pt-10'>
            <div className=' py-8 mt-10 flex max-md:flex-col-reverse  gap-8 items-center px-6 max-w-[1100px] mx-auto'>
                    <div id='animate' className='grid grid-cols-2 gap-2 md:max-w-[50%]'>
                    <img src="/climate pic.webp" alt="" className='rounded-xl w-full h-full' />
                    <img src="/action pic.jpg" alt="" className='rounded-xl w-full h-full' />
                    <img src="/Climate_Action.jpg" alt="" className='rounded-xl w-full h-full' />
                    <img src="/3rs2.png" alt="" className='rounded-xl w-full h-full' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-4xl font-bold text-center md:text-left pt-4'>Innovative Solutions for a Greener Future </h4>
                    </div>
                </div>
        </section>
        {/* para sa events */}
        <UpcommingEvents/>
        {/* <section id="events" className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-10">
                Upcoming Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div id='animate'
                className="p-2 bg-gray-50 rounded-lg shadow-md min-w-[370px] max-w-[400px] m-auto"
            >
                <h3 className="text-2xl font-semibold mb-4">Tree Planting Campaign</h3>
                <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                className="mt-2 w-full h-[30vh] md:w-[25vw] object-cover mx-auto"
                />
                <p className="mt-4">
                Join us in planting trees to help restore natural habitats and combat climate change.
                </p>
                <a href="volunteer" className="text-green-600 font-semibold hover:underline mb-4 mt-4 block">
                Volunteer Now
                </a>
                
            </div>
            <div id='animate'
                className="p-2 bg-gray-50 rounded-lg shadow-md min-w-[370px] max-w-[400px] m-auto"
            >
                <h3 className="text-2xl font-semibold mb-4">Tree Planting Campaign</h3>
                <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                className="mt-2 w-full h-[30vh] md:w-[25vw] object-cover mx-auto"
                />
                <p className="mt-4">
                Join us in planting trees to help restore natural habitats and combat climate change.
                </p>
                <a href="#" className="text-green-600 font-semibold hover:underline mb-4 mt-4 block">
                Volunteer Now
                </a>
            </div>
            <div id='animate'
                className="p-2 bg-gray-50 rounded-lg shadow-md min-w-[370px] max-w-[400px] m-auto"
            >
                <h3 className="text-2xl font-semibold mb-4">Tree Planting Campaign</h3>
                <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                className="mt-2 w-full h-[30vh] md:w-[25vw] object-cover mx-auto"
                />
                <p className="mt-4">
                Join us in planting trees to help restore natural habitats and combat climate change.
                </p>
                <a href="#" className="text-green-600 font-semibold hover:underline mb-4 mt-4 block">
                Volunteer Now
                </a>
            </div>
        </div>
            </div>
        </section> */}
        {/* <section className='w-auto min-h-[75vh]'>
            <div>
                <div className='pt-6'>
                    <h4 className='text-4xl text-center font-bold text-black'
                    >Recent Event<br/>
                    </h4>
                </div>
                <div className='py-8 mt-10 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1200px] mx-auto'>
                <div>
                    <div className='h-[60vh] w-[50w]'>
                        <img src="/resilient climate.webp" alt="" className='w-full h-full rounded-lg shadow-md'/>
                        
                    </div>
                </div>
                <div className=''>
                <div>
                    <h4 className='text-2xl text-center font-bold text-green-500'
                        >Tree Planting<br/>
                    </h4>
                    <p className='text-lg tracking-wide leading-10'>
                        Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts.
                        It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness. 
                    </p>
                    <div className='block items-start justify-start mt-5 py-3 rounded-lg pl-2 border-l-4  border-green-500 bg-green-100'>
                        <span className='text-gray-700 text-sm text-center'>Date of event: <span className='text-gray-500'>Thursday, October 17, 2024</span></span><br/>
                        <span className='text-gray-700 text-sm text-center'>Time: <span className='text-gray-500'> 09:46 PM</span></span><br/>
                        <span className='text-gray-700 text-sm text-center'>Address of event: <span className='text-gray-500'>
                            Sinabacan, Cande, Zambales
                        </span></span><br/>
                    </div>
                </div>
                </div>
                </div>
            </div>
            <div className='text-center'>
            <a href="/eventreport" className="text-green-600 text-xl font-semibold underline mb-4 mt-4 block">
                See more
            </a>
            </div>
         <hr className='w-[70vw] m-auto'/>
        </section> */}

        {/* para sa Event Recent */}
            <section id='recent' className="relative bg-cover bg-center h-[80vh] bg-[url('/energy-efficiency.jpeg')]">
                <div className="absolute inset-0 bg-green-900 opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-5xl font-bold mb-4">Act Now for a Better Tomorrow</h1>
                    <p className="text-lg mb-6">Join our climate change movement and be a part of the solution.</p>
                    <div className='flex justify-center items-center mt-8'>
                    <a href="/eventreport" className="bg-green-500 hover:bg-green-700 text-white py-4 px-6 rounded-full shadow-lg transition duration-300">View Recent Events</a>
                    <svg className="w-[40px] h-[40px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
                    </svg>

                    </div>
                </div>
            </section>

        <section className='w-auto min-h-[75vh]'>
            <div className='py-8 mt-10 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1100px] mx-auto'>
                    <div id='animate' className=''>
                        <p className='text-lg tracking-wide leading-10'>
                        Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts.
                        It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                        The goal encourages global cooperation to reduce carbon emissions, enhance disaster risk management, and promote sustainable practices to protect ecosystems and ensure a sustainable future for all. 
                        </p>
                    </div>
                    <div>
                    <img id='animate' src="/climate action2.png" alt="" className='rounded-xl w-full h-auto'/>
                    </div>
                
                </div>
        </section>
        
        <section className=' w-auto pt-8 min-h-[90vh]'>
            <div id='animate' className='py-8 mt-20 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1200px] mx-auto'>
                <div className=''>
                    <p className='text-lg tracking-wide leading-10'>
                     Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts.
                     It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                     The goal encourages global cooperation to reduce carbon emissions, enhance disaster risk management, and promote sustainable practices to protect ecosystems and ensure a sustainable future for all. 
                    </p>
                </div>
                <div>
                    <h4 className='text-4xl font-bold text-left pt-4'>A Sustainable Development Goal for Climate Action</h4>
                </div>
            </div>
        </section>


        <section id='climateAction' className='w-auto min-h-[100vh] pt-20'>
             <div id='animate' className='text-center pt-10'>
                <h4 className='text-4xl font-bold  pt-4'>Climate Action: Turning Ideas into Impact</h4>
            </div>
            <div className='py-16 mt-8 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1100px] mx-auto'>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/renewable energy.webp" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Transition to Renewable Energy</h4>
                        <p className='text-md max-w-[400px] '>Shift from fossil fuels to clean energy sources like solar, wind, hydro, and geothermal power.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/energy-efficiency.jpeg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Energy Efficiency</h4>
                        <p className='text-md max-w-[400px] '>Implement energy-saving practices in homes, businesses, and industries by using efficient appliances and optimizing energy usage.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/reforest.jpg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Reforestation and Afforestation</h4>
                        <p className='text-md max-w-[400px] '>Protect existing forests and plant new trees to absorb carbon dioxide, creating carbon sinks.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/electric vehicle.webp" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Promote Electric Vehicles (EVs)</h4>
                        <p className='text-md max-w-[400px] '>Encourage the use of electric cars, buses, and bikes to reduce pollution from traditional combustion engines.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/3rs.jpg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Reduce, Reuse, and Recycle</h4>
                        <p className='text-md max-w-[400px] '>Minimize waste production and encourage recycling programs to reduce the amount of waste in landfills, which produce harmful greenhouse gases.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/conserve water.jpg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Conservation of Water Resources</h4>
                        <p className='text-md max-w-[400px] '>Protect water bodies and adopt water-efficient practices in agriculture, industry, and households to safeguard this vital resource.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/plant based diet.jpg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Adopt a Plant-Based Diet</h4>
                        <p className='text-md max-w-[400px] '>Reducing meat consumption can lower methane emissions from livestock and decrease the land and water used for animal farming.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/resilient climate.webp" alt="" className='rounded-xl w-[100px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Invest in Climate-Resilient Infrastructure</h4>
                        <p className='text-md max-w-[400px] '>Develop infrastructure that can withstand the impacts of climate change, such as floods, heat waves, and rising sea levels.</p>
                    </div>
                </div>
                   
            </div>
        </section>

        {/* <footer className='w-auto h-auto bg-[#76f4C4]'>
            <div className='max-w-[1000px] mx-auto py-16 px-4 grid gap-4'>
                <div className=' text-center'>
                    <h4 className='text-2xl font-bold '>"The greatest threat to our planet is the belief that someone else will save it." </h4>
                </div>
            </div>
            <p className='text-center pb-4'>All rights reserved 2024</p>
        </footer> */}
        <ContactUs/>
        <Footer/>


    </section>
  )
}

export default Homepage