import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo_the_web_apex.svg'

const AboutSection = () => {
    return (
        <section className='bg-[#2A4851] relative min-h-screen py-20 flex flex-col space-y-2'>
            {/* Group 1*/}
            <div className='group-1'>
                <h1 className='large-number text-[#f6f6f6] opacity-5 absolute z-0 top-1/4 left-0 -translate-x-[35%] -translate-y-[35%]  text-[25em] font-bold'>01</h1>
                <div className="who-we-are-section px-6  z-[100] opacity-100">
                    <h1 className=' text-[#B8F8C6] text-3xl font-bold'><span className=' text-white pr-3'>01.</span>Who are we? -</h1>
                    <h3 className='my-20'>
                        <strong className=' text-[#B8F8C6] font-bold text-2xl'>
                        We create professional custom website design and e-commerce websites which are Search-Engine Optimized. Over the years we have worked with many different systems and frameworks. 
                        </strong>
                    </h3>
                </div>
            </div>
            {/* Group 2 */}
            <div className="group-2">
                <h1 className='large-number text-[#f6f6f6] opacity-5 absolute z-0 bottom-0 right-0-0 translate-x-[5%] translate-y-[5%]  text-[25em] font-bold'>02</h1>
                <div className="who-we-are-section px-6 z-[100] opacity-100">
                    <h1 className=' text-[#B8F8C6] text-3xl font-bold'><span className=' text-white pr-3'>02.</span>Our Mission. -</h1>
                    <h3 className='my-20'>
                        <strong className=' text-[#B8F8C6] font-bold text-2xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere adipisci perspiciatis numquam veritatis facilis magni corrupti harum perferendis ducimus nisi, officiis fugiat eligendi fugit iste eos blanditiis ratione doloremque ipsum.
                        </strong>
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;