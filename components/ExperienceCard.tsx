import { motion } from 'framer-motion'
import Image from 'next/future/image'
import React from 'react'
import htmlicon from '../public/tools/html.png'
import reacticon from '../public/tools/react.png'
import cssicon from '../public/tools/css.png'
import jsicon from '../public/tools/js.png'

import apple from '../public/icons/apple.png'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
        snap-center bg-[#292929] p-10
        w-[300px] md:w-[700px] xl:w-[900px]
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
                <Image src={urlFor(experience?.companyImage).url()} height={100} width={100} alt='apple' className=' relative h-32 w-32 xl:w-[150px] xl:h-[150px] object-center ' />
            </motion.div>

            <div className=' px-0 md:px-10 md:max-w-7xl'>
                <h4 className='text-2xl font-light'>{experience.jobTitle}</h4>
                <p className='font-bold text-xl mt-1'>{experience.company}</p>
                <div className='flex space-x-2 my-2'>
                    {/* tech used */}
                    {experience.technologies.map(technology => (
                        <Image src={urlFor(technology?.image).url()} height={100} width={100} className='relative h-10 w-10 ' alt='icons' />
                    ))}
                    {/* <Image src={htmlicon} className='relative h-10 w-10 ' alt='icons' />
                    <Image src={cssicon} className='relative h-10 w-10 ' alt='icons' />
                    <Image src={jsicon} className='relative h-10 w-10 ' alt='icons' />
                    <Image src={reacticon} className='relative h-10 w-10 ' alt='icons' /> */}
                </div>
                <p className='uppercase py-2 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
                </p>
                {/* h-15 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-teal-500/80 could used these if i wanted to convert it into a scrollable container */}
                <ul className='list-disc space-y-1 ml-0 text-xs'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard