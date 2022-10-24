import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroudCircles from './BackgroudCircles';
import Image from 'next/image';
import Link from 'next/link';
import dp from '../images/dp.jpg';

type Props = {}

export default function Hero({ }: Props) {
    const [text] = useTypewriter({
        words: ['Hi, The name is Haroon Albar', 'Guy-who-loves-coffee.tsx', '<ButLovesToCodeMore />',],
        loop: true,
        //for the animation to stay on
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>

            <BackgroudCircles />

            {/* rounded full is not working inn the div */}
            <div className="relative h-32 w-32 mx-auto object-cover">
                <Image priority src={dp} layout='fill' className='rounded-full' />
            </div>

            {/*z-20 to layer over the backgroundcircles  */}
            <div className='z-20'>
                <h2 className='text-sm font-light uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Software Engineer</h2>
                <h1 className=' text-2xl lg:text-3xl font-semibold px-10'>
                    {/* mr-3 to give space between text and cursor */}
                    <span className='mr-3'>{text}</span>
                    {/* for getting teal-400 color its hex */}
                    <Cursor cursorColor='#2DD4BF' />
                </h1>
                {/* go to gobal.css and add the custom css utility class there */}
                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="projects">
                        <button className='heroButton'>Projects</button>
                    </Link>

                </div>
            </div>

        </div>
    );
}