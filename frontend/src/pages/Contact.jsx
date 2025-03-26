import { Blockquote } from '@radix-ui/themes'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='w-full flex justify-start lg:justify-center  p-2'>
                <div className='border border-black rounded-md shadow-lg shadow-gray-300 min-h-[50px] min-w-[80vw] max-w-[100vw] lg:max-w-[80vw] p-3' >
                    <div className='flex flex-wrap sm:flex-nowrap'>
                        <h1 className='text-2xl font-bold sm:pl-3 pl-0 '>
                            <Blockquote >Contact Info.</Blockquote>
                        </h1>
                    </div>
                    <div className='flex flex-col pl-11'>
                        <span className='font-bold text-md text-gray-600'>Shri Ganesh Rai Post Graduate College</span>
                        <span>Address	: Dobhi, Jaunpur, Uttar Pradesh (India).</span>
                        <span>Email	:	sgrpgc1964@gmail.com</span>
                        <span>Contacts	:	05450- 246125</span>
                        <span>Fax No.	:	05450- 246124</span>
                        <span>Website	:	www.sgrpgcollege.in</span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Contact
