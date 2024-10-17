import React, { useState } from 'react';

const EventLandingPage = () => {
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
        <section className='w-full min-h-screen bg-gray-100'>
            {/* Hero Section */}
            <div className='relative bg-[url("/resilient climate.webp")] bg-cover bg-center h-[70vh] flex items-center justify-center'>
                <div className='bg-black bg-opacity-50 w-full h-full absolute'></div>
                <div className='relative text-center text-white z-10 px-6'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Act Now for a Better Tomorrow
                    </h1>
                    <p className='text-lg md:text-xl mb-6'>
                        Join us in taking urgent actions to combat climate change and strengthen resilience to climate-related hazards.
                    </p>
                    <button className='bg-green-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-green-600 transition duration-300'>
                        Get Involved
                    </button>
                </div>
            </div>

            <div className='text-center pt-8 '>
                <h2 className='text-3xl font-bold text-green-500'>Recent Event</h2>
            </div>

            {/* About Event Section */}
            <div className='py-16 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center'>
                <div>
                    <img src="/plant based diet.jpg" alt="Tree Planting Campaign" className='w-full h-full rounded-lg shadow-md' />
                </div>
                <div className='space-y-6'>
                    <h2 className='text-3xl font-bold text-black'>Tree Planting</h2>
                    <p className='text-lg tracking-wide leading-8 text-gray-700'>
                        Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts. It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                    </p>
                    <div className='mt-5 py-3 rounded-lg pl-2 border-l-4 border-green-500 bg-green-100'>
                        <p className='text-gray-700 text-sm'>
                            <strong>Date of event:</strong> <span className='text-gray-500'>{dateInWords}</span>
                        </p>
                        <p className='text-gray-700 text-sm'>
                            <strong>Time:</strong> <span className='text-gray-500'>{timeInWords}</span>
                        </p>
                        <p className='text-gray-700 text-sm'>
                            <strong>Address of event:</strong> <span className='text-gray-500'>Sinabacan, Cande, Zambales</span>
                        </p>
                    </div>
                </div>
            </div>

            <hr className='w-[70vw] m-auto'/>

            <div className='py-16 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center'>
                <div className='space-y-6'>
                    <h2 className='text-3xl font-bold text-black'>Tree Planting</h2>
                    <p className='text-lg tracking-wide leading-8 text-gray-700'>
                        Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts. It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                    </p>
                    <div className='mt-5 py-3 rounded-lg pl-2 border-l-4 border-green-500 bg-green-100'>
                        <p className='text-gray-700 text-sm'>
                            <strong>Date of event:</strong> <span className='text-gray-500'>{dateInWords}</span>
                        </p>
                        <p className='text-gray-700 text-sm'>
                            <strong>Time:</strong> <span className='text-gray-500'>{timeInWords}</span>
                        </p>
                        <p className='text-gray-700 text-sm'>
                            <strong>Address of event:</strong> <span className='text-gray-500'>Sinabacan, Cande, Zambales</span>
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/energy-efficiency.jpeg" alt="Tree Planting Campaign" className='w-full h-full rounded-lg shadow-md' />
                </div>
            </div>

                <hr className='w-[70vw] m-auto'/>

            <div className='py-16 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center'>
                <div>
                    <img src="/conserve water.jpg" alt="Tree Planting Campaign" className='w-full h-full rounded-lg shadow-md' />
                </div>
                <div className='space-y-6'>
                    <h2 className='text-3xl font-bold text-black'>Tree Planting</h2>
                    <p className='text-lg tracking-wide leading-8 text-gray-700'>
                        Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts. It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                    </p>
                    <div className='mt-5 py-3 rounded-lg pl-2 border-l-4 border-green-500 bg-green-100'>
                        <p className='text-gray-700 text-sm'>
                            <strong>Date of event:</strong> <span className='text-gray-500'>{dateInWords}</span>
                        </p>
                        <p className='text-gray-700 text-sm'>
                            <strong>Time:</strong> <span className='text-gray-500'>{timeInWords}</span>
                        </p>
                        <p className='text-gray-700 text-sm'>
                            <strong>Address of event:</strong> <span className='text-gray-500'>Sinabacan, Cande, Zambales</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className='bg-green-500 py-12 text-center text-white'>
                <h3 className='text-2xl md:text-4xl font-bold mb-4'>
                    Ready to Make a Difference?
                </h3>
                <button className='bg-white text-green-500 px-6 py-3 rounded-full text-lg shadow-md hover:bg-gray-200 transition duration-300'>
                    Join our mission
                </button>
            </div>
        </section>
    );
};

export default EventLandingPage;
