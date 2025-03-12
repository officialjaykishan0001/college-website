import React from 'react'
import { GraduationCap, School, University } from 'lucide-react'
import { motion } from 'framer-motion'
const AboutSection = () => {
    return (
        <div>
            <div className="relative min-h-[830px] w-full">
                {/* Background Image with Blur */}
                <img
                    className="absolute w-full h-full object-cover blur-"
                    src="https://media.istockphoto.com/id/639359406/photo/students-studying-in-college-library.jpg?s=1024x1024&w=is&k=20&c=Xpoo2PlteJkUIMr1EywyyFXZARQblIMGQjpWNMJqdEM="
                    alt="Students Studying"
                />

                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-[#19315f]/80"></div>

                {/* Text Content */}
                <div className="absolute w-full items-center  text-white py-4">
                    <div>
                        <h1 className='flex justify-center text-2xl font-bold py-4 text-center '>Shri Ganesh Rai Post Graduate College</h1>
                        <p className='px-5 sm:px-12 flex justify-center  text-center '>Shri Ganesh Rai P. G. College, was established in 1939 by Late Shri Mathura Singh, Named after one of the great sons of Dobhi - Mathura Nagar, Jaunpur, U.P., India, freedom fighter Late shri Mathura Singh, it is one of the constituent Colleges of the University of Purvanchal, U.P., India. In the beginning, the College catered basically to the needs of those who were in employment but who had a desire to enhance their educational qualifications and achieve higher standards of learning. Shri Ganesh Rai P.G. College embodied the spirit of social responsibility and cultural awareness reflecting the aspirations of the students.</p>
                    </div>
                    <div className='flex justify-around items-center py-4 flex-wrap'>
                        <div className='flex flex-col items-center'>
                            <GraduationCap  size={140} />
                            <div className='flex flex-col items-center font-bold text-2xl '><span>5+</span><span>Courses</span></div>
                        </div>
                        <div>
                            <School size={140} />
                            <div className='flex flex-col items-center font-bold text-2xl '><span>5+</span><span>Departments</span></div>
                        </div>
                        <div>
                            <University size={140} />
                            <div className='flex flex-col items-center font-bold text-2xl '><span>5+</span><span>Faculties</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
