import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

export default function Header({ }: Props) {
  return (
    <div className=' sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-50'>

      < motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=' flex flex-row items-center' >
        <SocialIcon url="https://twitter.com/haroonislive" fgColor='gray' bgColor='transparent' />
        <SocialIcon url="https://youtube.com/haroonislive" fgColor='gray' bgColor='transparent' />
        <SocialIcon url="https://github.com/haroonislive" fgColor='gray' bgColor='transparent' />
        <SocialIcon url="https://linkidin.com/haroonislive" fgColor='gray' bgColor='transparent' />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer '>
        <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          get in touch
        </p>
      </motion.div>
    </div >
  );
}