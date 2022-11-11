import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/future/image';
import dp2 from '../public/dp2.jpg';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
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
                <Image src={urlFor(pageInfo?.profilePic).url()} height={100} width={100} alt='dp image' className=' rounded-xl  relative mt-20 md:mt-0 flex-shrink-0 w-56 h-56 
                 md:w-[600px] md:h-[450px] object-cover' />
            </motion.div>

            <div className=' space-y-10 px-0 md:px-10'>
                <h4 className=' text-2xl text-semibold'>
                    Here is a <span className='underline decoration-teal-400/50 '>little</span> background
                </h4>
                <p className=' text-base'>
                    Hey, I am <span className='text-teal-400'> Haroon</span> a tech geek. I love new technologies.
                    Currently I am exploring the world of the <span className=' text-teal-400'> web developnment</span>.
                    I like to explore and find new things in the development field everday.
                    {/* I the the hard coded one so */}
                    {/* {pageInfo?.backgroundInformation} */}
                </p>
            </div>
        </motion.div >
    );
}

export default About;