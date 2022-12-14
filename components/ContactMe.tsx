import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon, } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}
//inputs is used to get what types of things we are expecting for input
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

const ContactMe = (props: Props) => {
    //getting 2 handlers to set up our froms
    const { register, handleSubmit, } = useForm<Inputs>();
    //handleSubmit is from react hook froms and onSubmit is our own handler

    const onSubmit: SubmitHandler<Inputs> = (formData) => {

        //to redirect to send and email from the client
        //so now when you submit it opens up a mail client 
        window.location.href = `mailto:haroonalbarx@gmail.com?subject=${formData.subject}&body=Hai, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };
    return (
        <div className='relative h-screen flex flex-col md:flex-row text-center 
        md:text-left max-w-7xl justify-evenly mx-auto items-center p-10'>
            <h3 className='title'>Contact</h3>
            <div className='flex flex-col mt-10 mb-10 space-y-1  p-20'>
                <div className='mb-2 space-y-2'>
                    <h4 className='text-lg mt-5 md:mt-0 md:text-2xl font-semibold text-center'>
                        I have got just what you need.
                        <span className=' underline decoration-teal-500/50'> Lets Talk.
                        </span>
                    </h4>
                    <div className='flex flex-col space-y-2'>
                        <div className='flex items-center space-x-5 justify-center'>
                            <PhoneIcon className='text-teal-500 h-5 w-5 animate-pulse' />
                            <p className='text-sm'>+917012533321</p>
                        </div>
                        <div className='flex items-center space-x-5  justify-center'>
                            <EnvelopeIcon className='text-teal-500 h-5 w-5 animate-pulse' />
                            <p className='text-sm'>haroonalbarx@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-5  justify-center'>
                            <MapPinIcon className='text-teal-500 h-5 w-5 animate-pulse' />
                            <p className='text-sm'>Kannur, Kerala, India</p>
                        </div>
                    </div>
                    <div className='gap-10' />

                </div>
                {/* handleSubmit from reat form and onSubmit our own */}
                <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col space-y-2 w-fit mx-auto' >
                    {/* to connect each input field to the following field use {...register('nameofthefield')} */}
                    <div className='md:flex md:space-x-2 space-y-2 md:space-y-0'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button onSubmit={handleSubmit(onSubmit)} type='submit' className='bg-teal-500 px-1 py-1 md:py-3 rounded-md text-black font-bold text-lg'>submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe