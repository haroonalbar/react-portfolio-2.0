import { motion } from 'framer-motion'
import Image from 'next/future/image'
import React from 'react'
import netflix from '../public/icons/netflix.png'
import { urlFor } from '../sanity'
import { Project } from '../typings'
type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='title'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-teal-400/80'>
                {projects.map((project, i) => (
                    <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col  space-y-5 items-center justify-center p-20 md:p-44 md:mx-auto h-screen '>
                        <motion.div
                            initial={{ opacity: 0, y: -100, }}
                            transition={{ duration: 1.2, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            viewport={{ once: true }}
                            className='relative'>
                            <Image src={urlFor(project?.image).url()} height={100} width={100} alt='project' className='relative h-40 w-40 object-contain' />

                        </motion.div>

                        <div className='space-y-7 p-0 md:px-10 max-w-6xl'>
                            <h4 className=' text-base md:text-2xl font-semibold text-center'>
                                <span className=' underline decoration-teal-500/50'>Case study of {i + 1} of {projects.length}:</span> {project.title}
                            </h4>
                            <div className='flex items-center space-x-3 justify-center'>
                                {project?.technologies.map(technology => (
                                    <Image key={project._id} src={urlFor(technology.image).url()} alt='tech' height={100} width={100} className=" h-8 w-8 md:h-10 md:w-10 object-contain" />
                                ))}
                            </div>
                            <p className=' text-sm md:text-lg text-center md:text-left h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-teal-500/80'>
                                {project.summary}
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