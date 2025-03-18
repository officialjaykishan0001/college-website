import React from 'react'
import MapComponent from '../components/MapComponent'
import { Blockquote } from '@radix-ui/themes'

const About = () => {
  return (
    <div className='w-full flex justify-center p-2'>
      <div className='border border-black shadow-lg shadow-gray-300 min-h-[50px] min-w-[80vw] max-w-[80vw] p-3' >
        <div>
          <h1 className='text-2xl font-bold pl-3'> <Blockquote> About Dhobhi</Blockquote></h1>
          <div className='flex gap-3 justify-center items-center p-4'>
            <div className=''> <MapComponent /></div>
            <div>"DOBHI" is situated at the junction point of Jaunpur,Ghazipur and Varanasi District. It is situated about 34 km from Varanasi, Cantt.History of dobhi is related to lots of bravery activities and sacrifice incidents. Here is situated Purvanchal's most Heritage belt, i.e. MathuraNagri (Karra). This area is in touch of politics, education,socialism, art and culture. In this holy place a school "SRI GANESH RAI HIGH SCHOOL" was established by "Late Thakur Mathura Singh" in year 1939. In 1942 he takes part in freedom fighting. In that moment a British officer destroyed the school by fire and arrested Thakur Mathura Singh and his friends for making disturbances. But after few years when they get releases . They again establishes the school of Intermediate standard by the help and donation of local people in year 1950. Shri Ganesh Rai P. G. College, was established in 1964, it is one of the constituent Colleges of the University of Purvanchal,U. P., India. In the beginning, the College catered basically to the needs of those who were in employment but who had a desire to enhance their educational qualifications and achieve higher standards of learning. Shri Ganesh Rai P.G. College embodied the spirit of social responsibility and cultural awareness reflecting the aspirations of the students.</div>
          </div>
        </div>
        <div className='flex '>
          <h1 className='text-2xl font-bold pl-3 '>
            <Blockquote > About College</Blockquote>
            <img className='min-w-[420px] py-3 rounded-md' src="http://www.sgrpgcollege.in/images/CollegeFront.jpg" alt="college-front-pic" />
          </h1>
          <div className='flex justify-center items-center p-4 py-8'>
            <div>According to the change in Higher Education of new generation and their demand in Science, Arts, Education , Commerce and Agriculture Sciences S.G.R.P.G. College has taken affiliations time to time.

              SRI GANESH RAI TRUST has taken affiliation (approval) of running B.Sc. Class in Math like Physics, Math, Chemistry at first in 1964. Later on in year 1969 has taken affiliation of B.Sc. class in Biology like Botany,Zoology, Military Science and some subjects in B.A. like Hindi, English, Sanskrit, History, Geography, Economics, Political Science, Education, Sociology, psychology and Military Science

              In year 1972, it takes affiliation of running B.Ed. by Government Aid. In year 1979, it gets affiliation in commerce. In year 1979, it gets permission of running Post graduate courses like M.Sc.in Math and Chemistry. and M.A. in Military Science. In 1983, it gets affiliation in Geography. In 1993, it gets affiliation in M.Com. In 1994, it gets affiliation in B.Sc.(Agriculture, Computer Science, Office Management). In 1996, it gets affiliation in B.A.(Home Science). In 1996, also gets affiliation in M.A.(Political Science and History). In 1999, gets affiliation in M.Sc(Ag). In 2004, gets affiliation in M.A.(Home Science).

              Due to the proper devotion and hard work for the growth of college by Dr. Vijay Pratap Singh(Former Principal) it gets the structure of large organisation where several courses are running at one place.

              Shri Ganesh Rai P. G. College, was established in 1939 by Late Shri Mathura Singh, Named after one of thegreat sons of Dobhi - Mathura Nagar, Jaunpur, U.P., India, freedom fighter Late shri Mathura Singh, it is one of the constituent Colleges of the University of Purvanchal,U. P., India. In the beginning, the College catered basically to the needs of those who were in employment but who had a desire to enhance their educational qualifications and achieve higher standards of learning. Shri Ganesh Rai P.G. College embodied the spirit of social responsibility and cultural awareness reflecting the aspirations of the students.

              We look forward to the 21st century as a challenge and an opportunity to build our college as a vehicle of change and growth to prepare students think critically and act responsibly in a rapidly changing global environment.

              The best Infrastructure at Shri Ganesh Rai P. G. College:

              Shri Ganesh Rai P. G. College has some of the best faculty to guide students in their pursuit of knowledge. The College is equipped with outstanding laboratories and teaching aids, besides common resources like the central library, canteens and hostel facilities. Each department also has its own labs, libraries and even museums.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About