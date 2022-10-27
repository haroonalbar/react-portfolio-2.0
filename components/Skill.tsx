import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import jsicon from '../public/tools/js.png'

//pass in prop for left and right tarnsition    
type Props = {
    directionLeft?: boolean;
}

const Skill = ({ directionLeft }: Props) => {
    return (
        <div className='group relative flex cursor-pointer '>
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{ duration: 1 }}
                className='relative '>
                <div className=' relative h-16 w-16 xl:h-20 xl:w-20 border border-teal-500/50 rounded-full
                 filter group-hover:grayscale transition duration-300 ease-in-out object-cover'>
                    <Image src={jsicon} layout='fill' className='rounded-full' objectFit='cover' />

                </div>
            </motion.div>

            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
            h-16 w-16 xl:h-20 xl:w-20 rounded-full z-0'>
                <div className=' flex items-center justify-center h-full'>
                    <p className='text-xl font-bold text-black opacity-100'>100%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill