"use client";

import React from 'react';


const Page = () => {
  return (
    <section>
      <div className='bg-container'>
        <div className="contact-section">
          <h1 className='text-4xl'>Contact Us</h1>
        </div>
      </div>
       {/* Form Container */}
      <div className='form-container'>
        <div className="column column1">
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Do you have a project in mind? Want to me join or collabrate with you? Or do you want to hire me? Let me know.</p>
              <form action="#" className="space-y-8">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
              </form>
            </div>
          </section>
        </div>
        {/* Right Column */}
        <div className="column mt-40">
          <p><strong>Address:</strong> 1485 Tshetlo Crescent Street,<br />Ebony Park Ext2,<br /> Midrand,<br /> 1682</p>
          <p><strong>Email:</strong> mphomoipolai1@gmail.com</p>
          <p><strong>Phone:</strong> 0793676883</p>
        </div>
      </div>
      <style jsx>
        {`

          .form-container {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-gap: 20px;
          }

          .column {
            padding: 20px;
          }

          .contact-section {
            padding: 50px;
            text-align: center;
            background-color: #474e5d;
            color: white;
          }

          @media screen and (max-width: 767px) {
            .form-container {
              display: grid;
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Page;
