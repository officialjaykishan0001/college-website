import { Blockquote } from '@radix-ui/themes'
import React from 'react'

const PrincipalMessage = () => {
    return (
        <div className='w-full flex justify-start lg:justify-center  p-2'>
            <div className='border border-black shadow-lg shadow-gray-300 min-h-[50px] min-w-[80vw] max-w-[100vw] lg:max-w-[80vw] p-3' >
                <div className='flex flex-wrap sm:flex-nowrap'>
                    <h1 className='text-2xl font-bold sm:pl-3 pl-0'>
                        <Blockquote>Principal Message</Blockquote>
                        <div className='py-3'>
                            <img className='min-w-[220px] sm:min-w-[420px] py-3 rounded-md' src="/principalPic.png" alt="principal-message" />
                        </div>
                    </h1>
                    <div className='flex gap-3 justify-center items-center p-4 py-8 pt-12'>
                        <div className='text-justify'>
                            <span className='font-medium'>Dear Students</span> ,

                            I am very happy to speak to you in this page. Shri Ganesh Rai P.G.College has stood above the rest in its approach to education and in its pedagogies. The ways we teach and the ways our students learn are unique and creative. Consistently, we never hesitated to look into our deficiencies and transform us to an efficient agent of social change. Many critics would confirm that the College has substantially contributed to the process of National Development by providing quality education and thereby enabling the students to become globally competent. We have plans and dreams in the years to come. We propose to introduce academic Audit for every department by external experts. This aims at regular scrutiny of the quality of teaching and the content of teaching. This will certainly go a long way in enhancing quality in education in accordance with the objectives of the institution and in serving society at large with sensitivity and commitment.

                            Education is not an act of acquiring knowledge but learning a skill to lead life and forming one's personality. This is an ennobling process of growth. I can boldly say that we have excelled in every initiative that we undertook and we have stood together in facing the challenges in realizing quality education.

                            In all this, we have made every effort to be sensitive and compassionate to the marginalized and the people in need. This has been the unique character of Shri Ganesh Rai Education. I feel happy when the bright and talented students perform remarkably well. However what makes me happier is when a weak student from a rural background progresses steadily from poor performance to better performance, moving towards excellence. Our aim is bring out the best in our students and to train them to stretch or to 'go beyond' and develop into young leaders of the 21st century. I take this opportunity of wishing you success in your educational career with us.

                            <div className='flex flex-col text-[15px] text-gray-700 pt-2 italic'>
                                <span className='font-bold text-xl'>Prof. Praveen Kumar Singh</span>
                                <span>Mobile No.: 9415234400</span>
                                <span>email: sgrpgc1964@gmail.com</span>
                                <span>Shri Ganesh Rai P.G.College,</span>
                                <span>Dobhi- Mathura Nagar,</span>
                                <span>Jaunpur, Uttar Pradesh</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrincipalMessage
