import { motion } from 'framer-motion'
import React from 'react'
import { Skill as SkillType } from '../typings'
//to avoid clashing of same name
import Skill from './Skill'

type Props = { skills: SkillType[] }

const Skills = ({ skills }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex relative flex-col text-center md:text-left xl:flex-row 
            max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-hidden'>
            <h3 className='title'>
                Skills
            </h3>

            <h3 className=' absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm mx-1 ' >
                Hover over a skill for current profieciency
            </h3>
            {/* grid-cols-4 md:grid-cols-5 xl:grid-cols-6 */}
            <div className='p-10 grid gap-5 grid-cols-4 xl:grid-cols-5 '>
                {skills.map(skill => (
                    <Skill key={skill._id} skill={skill} />
                ))}
            </div>

        </motion.div>
    )
}

export default Skills