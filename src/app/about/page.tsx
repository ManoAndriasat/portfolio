import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

const About = () => {

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-screen">

                <ul className="flex lg:flex-col">
                    <li className='mr-4 lg:mr-0 lg:mb-4 flex items-center'>
                        <Facebook className="mr-2" />
                    </li>
                    <li className='mr-4 lg:mr-0 lg:mb-4 flex items-center'>
                        <Twitter className="mr-2" />
                    </li>
                    <li className='mr-4 lg:mr-0 lg:mb-4 flex items-center'>
                        <Instagram className="mr-2" />
                    </li>
                    <li className='mr-4 lg:mr-0 lg:mb-4 flex items-center'>
                        <LinkedIn className="mr-2" />
                    </li>
                    <li className='mr-4 lg:mr-0 lg:mb-4 flex items-center'>
                        <GitHub className="mr-2" />
                    </li>
                </ul>

            </div>
        </>
    );
};

export default About;
