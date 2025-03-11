import React from 'react'
import { motion } from 'framer-motion'
import { Rss } from 'lucide-react'

const AccouncementBar = () => {
    return (
        <div className=''>
            <div className='absolute z-10 bg-red-500 p-3'><Rss /></div>
            <div className="flex justify-center items-center w-full bg-[#ebf2ff] text-[#837ab7] py-4  overflow-hidden h-12 ">
                <motion.div
                    className=" whitespace-nowrap text-lg font-bold py-10 "
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                    ⚠️ Important Notice: Admissions Open for 2025 | Apply Now | University Events Coming Soon! ⚠️
                </motion.div>
            </div>
        </div>
    )
}

export default AccouncementBar
