import React from 'react';
import logo from '../../assets/Screenshot 2023-06-05 132249.png'
const Footer = () => {
    return (
     <div>
           <div className='bg-[rgb(10,19,30)] lg:hidden md:hidden  grid justify-items-center '>
             <div className='my-auto'>
            <img className='w-60 lg:ms-5 pt-5  ' src={logo} alt="" />
            </div>
        <div className="flex text-white lg:ms-20 text-center lg:text-start my-component tracking-wide pt-5 text-2xl">
        <p>Privacy Policy</p>
        <p className='ps-3'>About us</p>
        </div>
        <p className=' text-white lg:ms-20 text-center lg:text-start my-component tracking-wide pt-5 text-2xl'>hello@sharksmarketing.com <br /> +91 86996 99866</p>
        <p className=' text-white lg:ms-20 text-center lg:text-start my-component tracking-wide pt-5 text-2xl'>Sharks Marketing ® <br /> 2023 All Rights Reserved</p>
        </div>


        <div className='bg-[rgb(10,19,30)]  hidden lg:block md:block'>
             <div className='my-auto'>
            <img className='w-60 lg:ms-5 pt-5 ' src={logo} alt="" />
            </div>
        <div className="flex text-white lg:ms-20 text-center lg:text-start my-component tracking-wide pt-5 text-2xl">
        <p>Privacy Policy</p>
        <p className='ps-3'>About us</p>
        </div>
        <p className=' text-white lg:ms-20 text-center lg:text-start my-component tracking-wide pt-5 text-2xl'>hello@sharksmarketing.com <br /> +91 86996 99866</p>
        <p className=' text-white lg:ms-20 text-center lg:text-start my-component tracking-wide pt-5 text-2xl'>Sharks Marketing ® <br /> 2023 All Rights Reserved</p>
        </div>
     </div>
    );
};

export default Footer;