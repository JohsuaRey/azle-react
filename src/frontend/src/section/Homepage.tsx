import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import ContactUs from './ContactUs';
import './animation.css';
import Hero from './Hero';
import UpcommingEvents from './UpcommingEvents';
const Homepage = () => {
      const heroStyle = {
        background: "linear-gradient(#003a077b, rgba(0, 58, 7, 0.7)), url('/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <section>
        <Navbar/>
       <section className="min-h-screen w-auto" style={heroStyle}>
        {/* <Navbar/> */}
            <div className='relative z-10 flex items-center justify-center text-center gap-4 flex-col sm:pt-60 pt-40  max-w-[950px] mx-auto px-4'>
                <h3 className='text-4xl sm:text-6xl font-bold leading-[60px] text-green-200'>
                    Together for a Greener <br />Future
                </h3>
                <p className='pt-4 text-xl tracking-wide text-white'>
                    Join us at Greenfuture in the fight against climate change.
                </p>
                <div className='flex justify-center items-center mt-8'>
                <a href='#events' className="text-white hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-white dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Volunteer now</a>
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


        <section id='climateAction' className='w-auto min-h-[100vh]'>
             <div id='animate' className='text-center pt-10'>
                <h4 className='mb-8 text-4xl text-center font-bold text-green-600'
               >Climate Action: Turning Ideas into Impact<br/>
           </h4>
            </div>
            <div className='py-16 mt-8 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1100px] mx-auto'>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/renewable energy.webp" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <a target='_blank' href="https://www.spglobal.com/en/research-insights/market-insights/what-is-energy-transition#:~:text=Energy%20transition%20refers%20to%20the,well%20as%20lithium%2Dion%20batteries."><h4 className='text-xl font-bold py-2 hover:text-blue-500 underline underline-offset-2'>Transition to Renewable Energy</h4></a>
                        <p className='text-md max-w-[400px] '>Shift from fossil fuels to clean energy sources like solar, wind, hydro, and geothermal power.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/energy-efficiency.jpeg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <a target='_blank' href="https://www.energy.gov/eere/energy-efficiency-buildings-and-industry#:~:text=Energy%20efficiency%20is%20the%20use,less%20energy%20to%20produce%20goods."><h4 className='text-xl font-bold py-2 hover:text-blue-500 underline underline-offset-2'>Energy Efficiency</h4></a>
                        <p className='text-md max-w-[400px] '>Implement energy-saving practices in homes, businesses, and industries by using efficient appliances and optimizing energy usage.</p>
                    </div>
                </div>
                
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/reforest.jpg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <a target='_blank' href="https://www.drax.com/sustainable-bioenergy/what-is-reforestation-and-afforestation/#:~:text=Reforestation%20is%20the%20process%20of,before%2C%20creating%20a%20new%20forest."><h4 className='text-xl font-bold py-2 hover:text-blue-500 underline underline-offset-2'>Reforestation and Afforestation</h4></a>
                        <p className='text-md max-w-[400px] '>Protect existing forests and plant new trees to absorb carbon dioxide, creating carbon sinks.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/electric vehicle.webp" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    
                    <div id='animate'>
                    <a target='_blank' href="https://www.epd.gov.hk/epd/english/environmentinhk/air/promotion_ev/promotion_ev.html"><h4 className='text-xl font-bold py-2 hover:text-blue-500 underline underline-offset-2'>Promote Electric Vehicles (EVs)</h4></a>
                        <h4 className='text-xl font-bold py-2'></h4>
                        <p className='text-md max-w-[400px] '>Encourage the use of electric cars, buses, and bikes to reduce pollution from traditional combustion engines.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/3rs.jpg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                    <a target='_blank' href="https://solarschools.net/knowledge-bank/sustainability/reduce-reuse-recycle"><h4 className='text-xl font-bold py-2 hover:text-blue-500 underline underline-offset-2'>Reduce, Reuse, and Recycle</h4></a>
                        <p className='text-md max-w-[400px] '>Minimize waste production and encourage recycling programs to reduce the amount of waste in landfills, which produce harmful greenhouse gases.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/conserve water.jpg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                    <a target='_blank' href="https://byjus.com/biology/how-can-we-conserve-water/#:~:text=Conservation%20of%20water%20mainly%20refers,and%20to%20avoid%20the%20scarcity."><h4 className='text-xl font-bold py-2 hover:text-blue-500 underline underline-offset-2'>Conservation of Water Resources</h4></a>
                        <p className='text-md max-w-[400px] '>Protect water bodies and adopt water-efficient practices in agriculture, industry, and households to safeguard this vital resource.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/plant based diet.jpg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <a target='_blank' href="https://www.downtoearth.org/articles/health-tips/81/adopting-plant-based-diet-one-step-time"><h4 className='text-xl font-bold py-2 hover:text-blue-500 underline underline-offset-2'>Adopt a Plant-Based Diet</h4></a>
                        <p className='text-md max-w-[400px] '>Reducing meat consumption can lower methane emissions from livestock and decrease the land and water used for animal farming.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/resilient climate.webp" alt="" className='rounded-xl w-[100px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <a target='_blank' href="https://news.climate.columbia.edu/2024/07/22/the-case-for-climate-resilient-infrastructure/#:~:text=Investing%20in%20climate%2Dresilient%20infrastructure,to%20continually%20repair%20and%20rebuild."><h4 className='text-xl font-bold py-2 hover:text-blue-500 underline underline-offset-2'>Invest in Climate-Resilient Infrastructure</h4></a>
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