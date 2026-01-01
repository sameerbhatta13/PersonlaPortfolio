import React from 'react'
import heroImage from '../assets/sameerbhatta.jpg'
const HomePage = () => {
    return (
        <div className='bg-gray-800 text-white text-center py-16 opacity-90' id='home'>
            <img src={heroImage} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
            <h1 className='text-4xl font-bold'> I'm {""}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> Sameer Bhatta </span>
                Full-stack Javascript Developer
            </h1>
            <p className='mt-4 text-lg text-gray-300 '>
                i am specialize in building modern and responsive applications
            </p>
            <div className='mt-8 space-x-4'>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })}>contact with me</button>
                <a
                    href='/cv.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</a>
            </div>
        </div>
    )
}

export default HomePage