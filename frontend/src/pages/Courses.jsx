import React from 'react'
import { Blockquote } from '@radix-ui/themes'

const Courses = () => {
    return (
        <div>
            <div className='w-full p-4 bg-[#f2f2f2]'>
                <h1 className='flex justify-center text-4xl font-semibold '>Courses</h1>
            </div>
            <div className='max-w-[95%] sm:max-w-[80%] mx-auto pb-2 '>
                <div className='border border-gray-50 shadow-2xl'>
                    <div>
                        <div className='bg-[#13263a] text-white  flex  justify-center'>
                            <div className='py-1'>
                                <h1 className='text-center text-2xl'>UNDER GRADUATE COURSES</h1>
                                <p className='text-[15px] text-gray-400 text-center px-4'>We offer Arts/Science/Commerce/Agricultural Science/Education (Duration 3 Years/6 Semester)</p>
                            </div>
                        </div>
                        <div className='pl-[15px] sm:pl-16 pb-5'>
                            <div><h1 className='text-2xl font-bold py-1 pt-4 text-purple-900'><Blockquote>SCIENCE</Blockquote> </h1></div>
                            <div className='px-10'>
                                <ul className='list-disc'>
                                    <li>Mathematics</li>
                                    <li>Physics</li>
                                    <li>Chemistry</li>
                                    <li>Zoology</li>
                                    <li>Botany</li>
                                    <li>Computer Application</li>
                                </ul>
                            </div>
                        </div>
                        <div className='pl-[15px] sm:pl-16 pb-5'>
                            <div><h1 className='text-2xl font-bold py-1 pt-4 text-purple-900'><Blockquote>ARTS</Blockquote> </h1></div>
                            <div className='px-10'>
                                <ul className='list-disc'>
                                    <li>Political Science</li>
                                    <li>Defence & Strategic Studies</li>
                                    <li>Hindi</li>
                                    <li>Geography</li>
                                    <li>Sanskrit</li>
                                    <li>Economics</li>
                                    <li>Sociology</li>
                                    <li>English</li>
                                    <li>History</li>
                                    <li>Psychology</li>
                                    <li>Education</li>
                                    <li>Physical Education</li>
                                    <li>Home Science</li>
                                </ul>
                            </div>
                        </div>
                        <div className='pl-[15px] sm:pl-16 pb-5'>
                            <div><h1 className='text-2xl font-bold py-1 pt-4 text-purple-900'><Blockquote>COMMERCE</Blockquote> </h1></div>
                            <div className='px-10'>
                                <ul className='list-disc'>
                                    <li>...</li>
                                </ul>
                            </div>
                        </div>
                        <div className='pl-[15px] sm:pl-16 pb-5'>
                            <div><h1 className='text-2xl font-bold py-1 pt-4 text-purple-900'><Blockquote>EDUCATION</Blockquote> </h1></div>
                            <div className='px-10'>
                                <ul className='list-disc'>
                                    <li>B.Ed.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='pl-[15px] sm:pl-16 pb-5'>
                            <div><h1 className='text-2xl font-bold py-1 pt-4 text-purple-900'><Blockquote>AGRICULTURE</Blockquote> </h1></div>
                            <div className='px-10'>
                                <ul className='list-disc'>
                                    <li>...</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#13263a] text-white text-2xl flex justify-center'>
                            <div className='py-1'>
                                <h1 className='text-center text-2xl'>POST GRADUATE COURSES</h1>
                                <p className='text-[15px] text-gray-400 text-center px-4'>We offer Arts/Science/ Agricultural Science (Duration 2 Years/4 Semester)
</p>
                            </div>
                        </div>
                        <div className='pl-[15px] sm:pl-16 pb-5'>
                            <div><h1 className='text-2xl font-bold py-1 pt-4 text-purple-900'><Blockquote>SCIENCE</Blockquote> </h1></div>
                            <div className='px-10'>
                                <ul className='list-disc'>
                                    <li>Mathematics</li>
                                    <li>Chemistry</li>
                                </ul>
                            </div>
                        </div>
                        <div className='pl-[15px] sm:pl-16 pb-5'>
                            <div><h1 className='text-2xl font-bold py-1 pt-4 text-purple-900'><Blockquote>ARTS</Blockquote> </h1></div>
                            <div className='px-10'>
                                <ul className='list-disc'>
                                    <li>History</li>
                                    <li>Political Science</li>
                                    <li>Geography</li>
                                    <li>Military Science</li>
                                </ul>
                            </div>
                        </div>
                        <div className='pl-[15px] sm:pl-16 pb-5'>
                            <div><h1 className='text-2xl font-bold py-1 pt-4 text-purple-900'><Blockquote>AGRICULTURAL SCIENCE</Blockquote> </h1></div>
                            <div className='px-10'>
                                <ul className='list-disc'>
                                    <li>Agronomy</li>
                                    <li>Soil Biolog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
