import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'

const HeroSection = () => {
    return (
        <>
            <div className='glass-container w-11/12 h-[85%] min-h-[30em] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-glass-white border-2 border-solid border-glass-white shadow-glass  
                            absolute lg:w-5/12 flex justify-center items-end lg:h-full lg:top-0 lg:left-0 lg:rounded-none lg:translate-x-0 lg:translate-y-0  '>
                <h1 
                    className='hero-heading absolute bg-hero-image right-[52%] top-[40%] bg-fixed bg-center bg-no-repeat bg-cover text-transparent bg-clip-text lg:top-[40%] lg:right-0'>
                Web</h1>
                <div className='flex justify-center items-center box-border p-6 '>
                    <div className=' mx-6 md:mx-12'>
                        <FontAwesomeIcon className='text-4xl' icon={faCode}/>
                    </div>
                    <div>
                        <h2 className='text-lg md:text-4xl'>Websites Done Right.</h2>
                        <p className='text-white text-sm md:text-lg'>
                            In the vast sea of ordinary, make sure your site is set apart from the competition.
                        </p>
                        <div className='button-group text-lg '>
                            <button className='hover:underline'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='hero-heading h-regular top-[53%] text-white lg:top-[55%] left-[42%] absolute'>Apex</h1>
        </>
    );
};

export default HeroSection;