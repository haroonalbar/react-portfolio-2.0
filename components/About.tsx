import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dp2 from '../public/dp2.jpg';

type Props = {}

const About = (props: Props) => {
    return (
        //h-screen is used for all sections to snap correctly
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='title'>
                About</h3>
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 1.2,
                }}
            >
                <div className=' relative mt-20 md:mb-0 flex-shrink-0 w-56 h-56 
                md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]'>
                    <Image src={dp2} className=' rounded-xl' layout='fill' objectFit='cover' />
                </div>
            </motion.div>

            <div className=' space-y-10 px-0 md:px-10'>
                <h4 className=' text-2xl text-semibold'>
                    Here is a <span className='underline decoration-teal-400/50 '>little</span> background
                </h4>
                <p className=' text-base'>
                    Hey, I'm <span className='text-teal-400'> Haroon</span> a tech geek. I love new technologies.
                    Currently I'm exploring the world of the <span className=' text-teal-400'> web developnment</span>.
                    I like to explore and find new things in the development field everday.
                </p>
            </div>
        </motion.div >
    );
}

export default About;