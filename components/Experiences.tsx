import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
    experiences: Experience[];
}

const Experiences = ({ experiences }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=' relative h-screen flex overflow-hidden flex-col text-left
             md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>


            <h3 className='title'>Experience</h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-teal-400/80'>
                {/* <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard /> */}
                {/* no need for the hard coded experience cards */}
                {experiences?.map(experience => (
                    <ExperienceCard key={experience._id} experience={experience} />
                ))}

            </div>

        </motion.div>
    )
}

export default Experiences