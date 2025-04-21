import React from 'react'
import employeeAttendence from '../assets/profile.png'
import ecomImg from '../assets/ecommerceImg.png'
import nodeImg from '../assets/RestApi.png'
import leadImg from '../assets/dashboard.png'
const MyProject = () => {
    const projects = [
        {
            id: 1,
            name: 'Employee Attendence Mangement',
            technologies: 'MERN stack',
            image: employeeAttendence,
            github: "http://github.com/sameerbhatta13"
        },
        {
            id: 2,
            name: 'E-Commerce full stack',
            technologies: 'MERN stack',
            image: ecomImg,
            github: "http://github.com/sameerbhatta13"
        },
        {
            id: 3,
            name: 'REST APIs',
            technologies: 'Node js and Express Js',
            image: nodeImg,
            github: "http://github.com/sameerbhatta13"
        },
        {
            id: 4,
            name: 'Lead Management System',
            technologies: 'React.js and Express.js ',
            image: leadImg,
            github: "http://github.com/sameerbhatta13"
        },
    ]
    return (
        <>
            <div className='bg-black text-white py-20 opacity-85 ' id='project'>
                <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                    <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>'
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            projects.map((project) => (
                                <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                                    <img src={project.image} alt="" className='rounded-lg mb-4 w-full h-48 object-cover' />
                                    <h3 className='text-2xl fontbold mb-2'>{project.name}</h3>
                                    <p className='text-gray-400 mb-4'>{project.technologies}</p>
                                    <a href={project.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>GitHub</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default MyProject