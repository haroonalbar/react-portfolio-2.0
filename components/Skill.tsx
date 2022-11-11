import { motion } from 'framer-motion'
import { url } from 'inspector'
import Image from 'next/future/image'
import React from 'react'
import jsicon from '../public/tools/js.png'
import { urlFor } from '../sanity'
import { Skill } from '../typings'

//pass in prop for left and right tarnsition    
type Props = {
    directionLeft?: boolean;
    skill: Skill
}

const Skill = ({ skill, directionLeft }: Props) => {
    return (
        <div className='group relative flex cursor-pointer '>
            {/* <motion.div
                initial={{
                    // x: directionLeft ? -200 : 200,
                    x: directionLeft ? -100 : 100,
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{ duration: 1 }}
                className='relative '> */}
            <motion.div
                initial={{ rotate: 180, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 2,
                }}
                className='relative'
            >
                <Image src={urlFor(skill.image).url()} height={100} width={100} alt='icon' className='relative h-14 w-14 md:h-16 md:w-16 xl:h-20 xl:w-20
                 filter group-hover:grayscale transition duration-300 ease-in-out object-contain' />

            </motion.div>

            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
            h-16 w-16 xl:h-20 xl:w-20 rounded-full z-0'>
                <div className=' flex items-center justify-center h-full'>
                    <p className='text-xl font-bold text-black opacity-100'>{skill.progress}%</p>
                </div>
            </div>
        </div >
    )
}

export default Skill