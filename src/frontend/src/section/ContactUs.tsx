import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="mt-8 py-16 bg-green-50">
      <div className="w-[80%] mx-auto px-4 text-center">
        <h2
          className="text-3xl font-bold text-black mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 shadow-xl rounded-xl bg-white p-8">
          <form
            className="w-full"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-left mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-left mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Your email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-left mb-2 text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 h-32"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white py-3 px-[50px] rounded-full mt-6 hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          <div
            className="hidden md:block"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src="/contact.png" alt="Contact Us" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
