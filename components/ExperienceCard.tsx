import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import htmlicon from '../public/tools/html.png'
import reacticon from '../public/tools/react.png'
import cssicon from '../public/tools/css.png'
import jsicon from '../public/tools/js.png'

import apple from '../public/icons/apple.png'

type Props = {}

const ExperienceCard = (props: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
        snap-center bg-[#292929] p-10
        w-[300px] md:w-[400px] xl:w-[600px]
         md:hover:opacity-100 md:opacity-40
        cursor-pointer transition-opacity duration-200 overflow-hidden '>
            <motion.div
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                viewport={{ once: true, }}
                transition={{ duration: 1.2, }}
            >
                <div className=' relative h-32 w-32 xl:w-[150px] xl:h-[150px] object-center '>
                    <Image src={apple} layout='fill' objectFit='cover' objectPosition='center' className='rounded-full' />
                </div>
            </motion.div>

            <div className=' px-0 md:px-10 md:max-w-7xl'>
                <h4 className='text-2xl font-light'>CEO of GumGumDev</h4>
                <p className='font-bold text-xl mt-1'>GumGum</p>
                <div className='flex space-x-2 my-2'>
                    {/* tech used */}
                    <div className='relative h-10 w-10 rounded-full'>
                        <Image src={htmlicon} layout="fill" objectFit='cover' objectPosition='center' />
                    </div>
                    <div className=' relative h-10 w-10 rounded-full'>
                        <Image src={cssicon} layout="fill" objectFit='cover' objectPosition='center' />
                    </div>
                    <div className=' relative h-10 w-10 rounded-full'>
                        <Image src={jsicon} layout="fill" objectFit='cover' objectPosition='center' />
                    </div>
                    <div className=' relative h-10 w-10 rounded-full'>
                        <Image src={reacticon} layout="fill" objectFit='cover' objectPosition='center' />
                    </div>
                </div>
                <p className='uppercase py-2 text-gray-300'>started work ... - Ended...</p>
                <ul className='list-disc space-y-1 ml-0 text-xs'>
                    <li>points</li>
                    <li>points</li>
                    <li>points</li>
                    <li>points</li>
                    <li>points</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard