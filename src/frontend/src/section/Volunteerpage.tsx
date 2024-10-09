import React from 'react'

const Volunteerpage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
            <section className="relative bg-cover bg-center h-[80vh] bg-[url('/bg.png')]">
                <div className="absolute inset-0 bg-green-900 opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-5xl font-bold mb-4">Act Now for a Better Tomorrow</h1>
                    <p className="text-lg mb-6">Join our climate change movement and be a part of the solution.</p>
                    <a href="#sign-up" className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300">Become a Volunteer</a>
                </div>
            </section>

            
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-green-600 mb-6">Our Key Initiatives</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-green-50 rounded-lg shadow-lg">
                            <div className="text-green-600 text-4xl mb-4">
                                🌱
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Tree Planting</h3>
                            <p>Help us plant trees and restore natural habitats to reduce carbon footprints and promote green environments.</p>
                        </div>
                        <div className="p-6 bg-green-50 rounded-lg shadow-lg">
                            <div className="text-green-600 text-4xl mb-4">
                                🌍
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Climate Education</h3>
                            <p>Spread knowledge about climate change and its impact through educational workshops and community outreach.</p>
                        </div>
                        <div className="p-6 bg-green-50 rounded-lg shadow-lg">
                            <div className="text-green-600 text-4xl mb-4">
                                ♻️
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Recycling Programs</h3>
                            <p>Organize and participate in local recycling drives to reduce waste and encourage sustainable living practices.</p>
                        </div>
                    </div>
                </div>
            </section>


            
            <div className="bg-gray-100 min-h-screen">
            <section id="sign-up" className="py-16 bg-green-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-green-600 mb-6">Sign Up to Make a Difference</h2>
                    <form  className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstname" className="block text-left mb-2 text-sm font-medium text-gray-900">First Name</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                    placeholder="Your first name"
                                    // value={formData.firstname}
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastname" className="block text-left mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                    placeholder="Your last name"
                                    // value={formData.lastname}
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div>
                                <label htmlFor="middlename" className="block text-left mb-2 text-sm font-medium text-gray-900">Middle Name</label>
                                <input
                                    type="text"
                                    id="middlename"
                                    name="middlename"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                    placeholder="Your middle name"
                                    // value={formData.middlename}
                                    // onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="extensionname" className="block text-left mb-2 text-sm font-medium text-gray-900">Extension Name</label>
                                <input
                                    type="text"
                                    id="extensionname"
                                    name="extensionname"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                    placeholder="Your extension name"
                                    // value={formData.extensionname}
                                    // onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div>
                                <label htmlFor="contact" className="block text-left mb-2 text-sm font-medium text-gray-900">Contact No.</label>
                                <input
                                    type="text"
                                    id="contact"
                                    name="contact"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                    placeholder="Your contact number"
                                    // value={formData.contact}
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gender" className="block text-left mb-2 text-sm font-medium text-gray-900">Gender</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                    // value={formData.gender}
                                    // onChange={handleChange}
                                    required
                                >
                                    <option value="">Select your gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="address" className="block text-left mb-2 text-sm font-medium text-gray-900">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                placeholder="Your address"
                                // value={formData.address}
                                // onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="email" className="block text-left mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                placeholder="Your email"
                                // value={formData.email}
                                // onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-green-600 text-white py-3 px-8 rounded-full mt-6 hover:bg-green-700 transition duration-300"
                        >
                            Join Our Mission
                        </button>
                    </form>
                </div>
            </section>
        </div>
        </div>
  )
}

export default Volunteerpage