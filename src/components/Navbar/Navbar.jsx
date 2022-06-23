import React from 'react';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {ReactComponent as Logo} from '../../assets/logo_the_web_apex.svg'


const Navbar = () => {
    return (
        <nav className='z-50 relative px-4 py-4'>
            <div className='container flex justify-between items-start max-w-6xl '>
                <div className='menu p-4 flex flex-col items-start justify-start h-0 overflow-hidden lg:w-full lg:overflow-visible lg:flex-row lg:justify-between lg:items-center'>
                    <ul className='order-2 social-links list-none p-0 inline-block lg:order-1'>
                        
                        <li className='inline-block mx-2'>
                            <a href="#" className='no-underline text-xl font-bold'>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </li>

                        <li className='inline-block mx-2'>
                            <a href="#" className=' no-underline text-xl font-bold'>
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                        </li>
                        <li className='inline-block mx-2'>
                            <a href="#" className=' no-underline text-xl font-bold'>
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                        </li>
                        <li className='inline-block mx-2'>
                            <a href="#" className=' no-underline text-xl font-bold'>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </li>
                    </ul>

                    {/* <div>
                        <Logo className=" w-20 h-20"/>
                    </div> */}

                    <ul className='nav-links order-1 pt-4 list-none inline-block lg:p-0 lg:order-2 '>
                        <li className=' block my-2 ml-0 lg:inline-block mx-2 text-base font-bold uppercase hover:underline'> 
                            <a href="_blank" className=' text-white hover:text-slate-800'>Home</a>
                        </li>
                        <li className=' block my-2 lg:inline-block mx-2 text-base font-bold uppercase hover:underline'> 
                            <a href="_blank" className=' text-white hover:text-slate-800'>About Us</a>
                        </li>
                        <li className=' block my-2 lg:inline-block mx-2 text-base font-bold uppercase hover:underline'> 
                            <a href="_blank" className=' text-white hover:text-slate-800'>Contact</a>
                        </li>
                        <li className=' block my-2 lg:inline-block mx-2 text-base font-bold uppercase hover:underline'> 
                            <a href="_blank" className=' text-white hover:text-slate-800'>Blog</a>
                        </li>
                    </ul>
                   
                </div>
                <div className='menu-button text-2xl cursor-pointer absolute left-1/2 translate-x-1/2 lg:hidden'>
                        <FontAwesomeIcon icon={faBars}/>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;