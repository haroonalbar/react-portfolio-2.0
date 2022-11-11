import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroudCircles from './BackgroudCircles';
import Image from 'next/future/image';
import Link from 'next/link';
import dp from '../public/dp.jpg';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text] = useTypewriter({
        //?. is used to get if it is there in the backend else reutrn undefined and not an error
        words: [`Yo! It's ${pageInfo?.name}`, 'Guy-who-loves-coffee.tsx', '<ButLovesToCodeMore />',],
        loop: true,
        //for the animation to stay on
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>

            <BackgroudCircles />

            {/* rounded full is not working inn the div */}
            <Image src={urlFor(pageInfo?.heroImage).url()} width={100} height={100} alt='dp' className='rounded-full relative h-32 w-32 mx-auto object-cover' />

            {/*z-20 to layer over the backgroundcircles  */}
            <div className='z-20'>
                <h2 className='text-sm font-light uppercase text-gray-500 pb-2 tracking-[15px]'>
                    {pageInfo?.role}</h2>
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
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>

                </div>
            </div>

        </div>
    );
}