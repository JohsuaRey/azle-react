import React, { useState } from 'react';

const Eventreports = () => {
    const currentDate = new Date();

  const dateInWords = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const timeInWords = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

    return (
        <section className=' w-auto pt-8  min-h-[90vh] '>
            <div>
                <div className='py-8 mt-10 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1200px] mx-auto'>
                    <div>
                        <div className='h-[60vh] w-[50w]'>
                            <img src="/resilient climate.webp" alt="" className='w-full h-full rounded-lg shadow-md'/>
                                
                        </div>
                    </div>
                <div className=''>
                    <div>
                       <h4 className='text-2xl text-center text-black'
                            >Tree Planting Campaign<br/>
                        </h4>
                        <p className='text-lg tracking-wide leading-10'>
                            Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions tocombat climate change and its impacts.
                            It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards,integrate climate measures into policies, and raise awareness. 
                        </p>
                            {/* date of events */}
                        <div className='block items-start justify-start mt-5 py-3 rounded-lg pl-2 border-l-4  border-green-500 bg-green-100'>
                            <span className='text-gray-700 text-sm text-center'>Date of event: <span className='text-gray-500'>{dateInWords}</span></span><br/>
                            <span className='text-gray-700 text-sm text-center'>Time: <span className='text-gray-500'>{timeInWords}</span></span><br/>
                            <span className='text-gray-700 text-sm text-center'>Address of event: <span className='text-gray-500'>
                                    Sinabacan, Cande, Zambales
                            </span></span><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* event number 2 */}

            <div>
                <div className='py-8 mt-10 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1200px] mx-auto'>
                    <div>
                        <div className='h-[60vh] w-[50w]'>
                            <img src="/resilient climate.webp" alt="" className='w-full h-full rounded-lg shadow-md'/>
                                
                        </div>
                    </div>
                <div className=''>
                    <div>
                       <h4 className='text-2xl text-center text-black'
                            >Tree Planting Campaign<br/>
                        </h4>
                        <p className='text-lg tracking-wide leading-10'>
                            Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions tocombat climate change and its impacts.
                            It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards,integrate climate measures into policies, and raise awareness. 
                        </p>
                            {/* date of events */}
                        <div className='block items-start justify-start mt-5 py-3 rounded-lg pl-2 border-l-4  border-green-500 bg-green-100'>
                            <span className='text-gray-700 text-sm text-center'>Date of event: <span className='text-gray-500'>{dateInWords}</span></span><br/>
                            <span className='text-gray-700 text-sm text-center'>Time: <span className='text-gray-500'>{timeInWords}</span></span><br/>
                            <span className='text-gray-700 text-sm text-center'>Address of event: <span className='text-gray-500'>
                                    Sinabacan, Cande, Zambales
                            </span></span><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Eventreports;
