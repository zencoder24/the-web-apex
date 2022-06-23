import React from 'react';
import ProjectItem from './ProjectItem';
import rmtImage from '../../assets/mobile/rmtImage.png'
import entImage from '../../assets/mobile/entapp.png'
import urlShortImage from '../../assets/mobile/urlShorten.png'
import tipCalc from '../../assets/mobile/tipCalc.png'

const ProjectsSection = () => {
    return (
        <section className='bg-[#060809] relative min-h-screen py-20 flex flex-col'>
            <div className='group-3'>
            <h1 className='large-number text-[#f6f6f6] opacity-5 absolute z-0 top-0 right-0 translate-x-[20%] -translate-y-[-35%]  text-[25em] font-bold'>03</h1>
            <div className="who-we-are-section px-6  z-[100] opacity-100">
                    <h1 className=' text-white text-3xl font-bold'><span className=' text-white pr-3'>03.</span> Our creations. -</h1>
                    <div className='flex flex-col my-12 relative'>
                        <ProjectItem 
                            image={rmtImage} 
                            alt="Rashod's Moving Company" 
                            projectName="Rashod's Moving Company" 
                            projectDesc="blahblah" 
                        />
                        <ProjectItem 
                            image={entImage} 
                            alt="Entertainment App" 
                            projectName="Entertainment App" 
                            projectDesc="blahblah" 
                        />
                        <ProjectItem 
                            image={urlShortImage} 
                            alt="Url Shortener App" 
                            projectName="Shortly - URL Shortener App" 
                            projectDesc="blahblah" 
                        />
                         <ProjectItem 
                            image={tipCalc} 
                            alt="Tip Calculator App" 
                            projectName="Splitter - Tip Calculator App" 
                            projectDesc="blahblah" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;