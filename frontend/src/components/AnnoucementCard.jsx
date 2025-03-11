import { Separator } from '@radix-ui/themes'
import React from 'react'

const AnnoucementCard = () => {
    return (
        <div>
            <div className='p-2  m-1 rounded-sm cursor-pointer '>
                <p className='text-blue-500 cursor-pointer'>Karma Yoga: Finding Joy in Every Action</p>
                <div className='flex justify-between px-1'>
                    <span className='font-semibold text-sm  text-gray-500'>Sat, 01 Feb 2024</span>
                    <span className='text-red-300'> Read More</span>
                </div>
                <Separator orientation="horizontal"  size='4' className='my-3' />
            </div>
        </div>
    )
}

export default AnnoucementCard
