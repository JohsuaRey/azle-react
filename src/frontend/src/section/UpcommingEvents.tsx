import React from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'Climate Action Summit 2024',
    date: 'November 15, 2024',
    location: 'Virtual & In-Person',
    description: 'Join leaders and activists to discuss strategies for tackling climate change.',
    imageUrl: '/Climate_Action.jpg',
  },
  {
    id: 2,
    title: 'Sustainable Living Workshop',
    date: 'December 10, 2024',
    location: 'Community Center, Main Hall',
    description: 'Learn practical tips for reducing your carbon footprint and living sustainably.',
    imageUrl: '/conserve water.jpg',
  },
  {
    id: 3,
    title: 'Youth Climate Forum',
    date: 'January 20, 2025',
    location: 'Local High School Auditorium',
    description: 'An interactive forum for young people to voice concerns and share ideas.',
    imageUrl: '/reforest.jpg',
  },
  
  {
    id: 4,
    title: 'Youth Climate Forum',
    date: 'January 20, 2025',
    location: 'Local High School Auditorium',
    description: 'An interactive forum for young people to voice concerns and share ideas.',
    imageUrl: '/reforest.jpg',
  },
];

const UpcommingEvents: React.FC = () => {
  return (
    <section id='events' className="pt-20 pb-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
            <h4 className='mb-8 text-4xl text-center font-bold text-green-600'
               >Upcoming Events <br/>
           </h4>
        <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 lg:grid-cols-3  gap-8 ">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover" // Style for the image
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
                <p className="text-gray-600">{event.location}</p>
                <p className="text-gray-800 mt-4">{event.description}</p>
                <div className="mt-4">
                  <a href='/volunteer' className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcommingEvents;
