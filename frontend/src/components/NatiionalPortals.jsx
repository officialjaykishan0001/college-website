import React from 'react'

const NatiionalPortals = () => {
    return (
        <div className='my-4 bg-[#f2f3fa] p-5 pb-8'>
            <h1 className='text-3xl text-purple-800 font-bold flex justify-center my-5'>National Portal Link</h1>
            <div className='flex justify-center gap-6'>
                <div className=' shadow-gray-400 bg-white shadow-md cursor-pointer rounded-full p-8 flex justify-center'><img src="/nirf.png" width={160} alt="nirf" /></div>
                <div className=' shadow-gray-400 bg-white shadow-md cursor-pointer rounded-full p-8 flex justify-center'><img src="/swachh.png" alt="swachh bharat mission" width={160} /></div>
                <div className=' shadow-gray-400 bg-white shadow-md cursor-pointer rounded-full p-8 flex justify-center'><img src="digitalind.png" alt="Digital india" width={160} /></div>
                <div className=' shadow-gray-400 bg-white shadow-md cursor-pointer rounded-full p-8 flex justify-center'><img src="/indiagovin.png" alt="" width={160} /></div>
            </div>
        </div>
    )
}

export default NatiionalPortals
