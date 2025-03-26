import { Blockquote } from '@radix-ui/themes'
import React from 'react'

const Sports = () => {
    return (
        <div>
            <div className='w-full flex justify-start lg:justify-center  p-2'>
                <div className='border border-gray-300 rounded-md shadow-lg shadow-gray-300 min-h-[50px] min-w-[80vw] max-w-[100vw] lg:max-w-[80vw] p-3' >
                    <div className='flex flex-wrap sm:flex-nowrap'>
                        <h1 className='text-2xl font-bold sm:pl-3 pl-0 '>
                            <Blockquote >Sports</Blockquote>
                            <img className='min-w-[220px] sm:min-w-[420px] py-3 rounded-md' src="http://www.sgrpgcollege.in/images/sport2.jpg" alt="college-front-pic" />
                        </h1>
                        <div className='flex justify-center items-center p-4 py-9'>
                            <div className='text-justify'>
                                Sports inculcates the spirit of harmony, brotherhood and togetherness across various sections of people regardless of boundaries . Our students have participated in various Inter - Collegiate and University competitions at various levels. Our college is proud of a well equipped Gymnasium and sports room to cater the needs of aspiring sportspersons. Students are motivated to participate in various outdoor games such as Cricket, Football, Kabaddi, Volleyball, Throwball, Hand ball, Ball Badminton, and indoor games such as Chess, Carrom and Badminton to develop their physique and foster values like teamspirit and leadership. It is rightly said that the playground is the cradle of democracy. We use the medium of sport to harness the creative energies of students and develop trained personalities by motivating them to play various games. Many of our students have done us Proud by participating in various Inter - Collegiate and University events
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sports
