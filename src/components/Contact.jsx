import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return (
        <>
            <div className='bg-black text-white py-20 opacity-90' id='Contact'>
                <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                    <h2 className='text-4xl font-bold text-center mb-12'>Contacts me</h2>
                    <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                        <div className='flex-1'>
                            <h3>let's Talk</h3>
                            <p> I am open to discuss about the development process </p>
                            <div className='mb-4 '>
                                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                                <a href="mailto:sameerbhatta37@gmail.com" className='hover:underline'>sameerbhatta37@gmail.com</a>

                            </div>
                            <div className='mb-4 '>
                                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                                <span>{import.meta.env.VITE_CONTACT_NUMBER}</span>

                            </div>
                            <div className='mb-4'>
                                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                                <span>Maittidevi, Kathmandu, Bagmati, Nepal</span>

                            </div>
                        </div >
                        <div className='flex-1 w-full'>
                            <form className='space-y-4'>

                                <div>
                                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                                    <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='enter your name' />
                                </div>
                                <div>
                                    <label htmlFor="email" className='block mb-2'>Email</label>
                                    <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='enter your email' />
                                </div>
                                <div>
                                    <label htmlFor="message" className='block mb-2'>Your Name</label>
                                    <textarea type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                        rows='5' placeholder='enter your message' />
                                </div>
                                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact