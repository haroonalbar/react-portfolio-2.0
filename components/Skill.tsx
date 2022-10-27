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
                className=' relative h-14 w-14 xl:h-18 xl:w-18 filter group-hover:grayscale transition duration-300 ease-in-out'>
                <Image src={jsicon} layout='fill' className='rounded-xl' objectFit='cover' />
            </motion.div>

            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
            h-14 w-14 xl:h-18 xl:w-18 rounded-xl z-0'>
                <div className=' flex items-center justify-center h-full'>
                    <p className='text-xl font-bold text-black opacity-100'>100%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill