import React from 'react'
import { Separator } from '@radix-ui/themes'
import AnnoucementCard from './AnnoucementCard'
const News = () => {
    return (
        <div>
            <div className='m-4 text-4xl font-medium text-purple-900'>
                <h1>News</h1>
            </div>
            <div className='max-h-96  sm:max-w-[30vw] rounded-md  overflow-y-auto scroll-my-0 shadow-md shadow-gray-300 z-10 m-3 p-4 scrollbar-none'>
                <AnnoucementCard />
                <AnnoucementCard />
                <AnnoucementCard />
                <AnnoucementCard />
                <AnnoucementCard />
                <AnnoucementCard />
                <AnnoucementCard />
                <AnnoucementCard />

            </div>
        </div>
    )
}

export default News
