import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import netflix from '../public/icons/netflix.png'
type Props = {}

const Projects = (props: Props) => {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='title'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col  space-y-5 items-center justify-center p-20 md:p-44 md:mx-auto h-screen '>
                        <motion.div
                            initial={{ opacity: 0, y: -300, }}
                            transition={{ duration: 1.2, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            viewport={{ once: true }}
                            className='relative'>
                            <div className='relative h-24 w-24 md:h-36'>
                                <Image src={netflix} layout='fill' objectFit='contain' />

                            </div>
                        </motion.div>

                        <div className='space-y-10 p-0 md:px-10 max-w-6xl'>
                            <h4 className=' text-base md:text-2xl font-semibold text-center'>
                                <span className=' underline decoration-teal-500/50'>Case study of {i + 1} of {projects.length}:</span>  UPS clone
                            </h4>
                            <p className=' text-sm md:text-lg text-center md:text-left'>
                                Netflix is one of the leading video streaming service providers today.
                                A Netflix clone is a feature-rich software script that allows developers to create
                                and deploy a video-on-demand platform similar to Netflix.
                                Despite being aligned with that of Netflix, the framework of a Netflix clone can be optimized
                                to execute features that the former doesn't have, such as a larger database and an integrated review section.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-teal-400/10 left-0 h-[350px] -skew-y-12 ' />

        </motion.div>

    )
}

export default Projects