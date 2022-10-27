import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
type Props = {}

const ContactMe = (props: Props) => {
    return (
        <div className='h-screen flex relative flex-col md:flex-row text-center 
        md:text-left max-w-7xl justify-evenly mx-auto items-center p-10'>
            <h3 className='title'>Contact</h3>
            <div className='flex flex-col space-y-10 p-20'>
                <h4 className='text-lg md:text-2xl font-semibold text-center'>
                    I have got just what you need.
                    <span className=' underline decoration-teal-500/50'>Lets Talk.
                    </span>
                </h4>
                <div className='flex flex-col space-y-3 md:space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-teal-500 h-7 w-7 animate-pulse' />
                        <p className='text-lg'>+917012533321</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-teal-500 h-7 w-7 animate-pulse' />
                        <p className='text-lg'>haroonalbarx@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-teal-500 h-7 w-7 animate-pulse' />
                        <p className='text-lg'>Kannur, Kerala, India</p>
                    </div>
                </div>
                <form className=' flex flex-col space-y-2 w-fit mx-auto' >
                    <div className='flex space-x-2'>
                        <input placeholder='Name' className='contactInput' type="text" />
                        <input placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input placeholder='Subject' className='contactInput' type="text" />
                    <textarea placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-teal-500 px-10 py-5 rounded-md text-black font-bold text-lg'>submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe