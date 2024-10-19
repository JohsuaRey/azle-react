import React from 'react'

const ContactUs = () => {
  return (
    <>
        <section id="sign-up" className="py-16 bg-green-50">
                <div className="w-[80%] mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-green-600 mb-8"
                    data-aos="fade-up"
                    data-aos-delay="100">Contact Us</h2>
                    <div className='grid grid-cols-1 rounded-xl md:grid-cols-2 shadow-xl '>
                        
                    <form  className="w-full mx-auto bg-white p-8 rounded-lg"
                    data-aos="fade-up"
                    data-aos-delay="300">
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
                            Submit
                        </button>
                    </form>
                    <div className=''
                        data-aos="fade-up"
                        data-aos-delay="300">
                            <img src="/contact.png" alt="" className='md:w-full h-full '/>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default ContactUs