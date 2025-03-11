import React from 'react'
import { Earth, MapPin, PhoneCall, ThumbsUp } from 'lucide-react'
import { Separator}  from '@radix-ui/themes'

const Footer = () => {
  return (
    <div className='bg-[#e0b54a] text-[#337ab7] p-4  '>
      <div className='flex  justify-between px-8'>
        <div>
          <div className='flex flex-col gap-3'>
            <div className='cursor-pointer flex items-center justify-center bg-purple-900  text-white gap-2 p-3 rounded-md font-bold'>
              <ThumbsUp />
              Feedback
            </div>
            <div>
              <Separator orientation="horizontal" size='4' className='my-3' color='white' />
              <span className=' font-semibold'>visitors: </span>
              <span className='bg-black text-white'>12345</span>
            </div>
          </div>
        </div>
        <div>
          <span className='text-purple-900 text-2xl font-medium'>Address</span>
          <div className='text-white flex flex-col gap-4 py-4'>
            <div className='flex gap-2 cursor-pointer'>
              <MapPin />
              <span>RMJJ+7PR, Shahganj Road, Siddikpur, Uttar Pradesh 222003</span>
            </div>
            <div className='flex gap-2 cursor-pointer'>
              <PhoneCall />
              <span>05452 252 244</span>
            </div>
            <div className='flex gap-2 cursor-pointer'>
              <Earth />
              <span>www.sgrpgcollege.in</span>
            </div>
          </div>
        </div>
        <div>
          <span className='text-purple-900 text-2xl font-medium'>Quick Links</span>
          <div className='text-white flex flex-col gap-4 py-4'>
            <span className='cursor-pointer'>Photo Gallery</span>
            <span className='cursor-pointer'>Downloads</span>
          </div>
        </div>
        <div>
          <span className='text-purple-900 text-2xl font-medium'>Contact Us</span>
          <div className='text-white flex flex-col gap-4 py-4'>
            <span className='cursor-pointer'>How to Reach</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer