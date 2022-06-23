import React from 'react';

const ProjectItem = ({image, alt, projectName, projectDesc}) => {
    return (
        //TODO: Add Hover overlay
        <div>
            <img className='w-72 my-0 mx-auto rounded-xl' src={image} alt={alt}/>
            <div className='py-6 text-center'>
                <h3 className='text-xl text-white font-bold '>{projectName}</h3>
                    <p className='text-[#B2CECB]'>{projectDesc}</p>
            </div>
        </div>
    );
};

export default ProjectItem;