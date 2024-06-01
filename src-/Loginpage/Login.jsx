// import React from 'react'

import React, {useState} from 'react'
import Logfonbgpic from './loginbgpic.png'
import Loginimg1 from './loginimg1.png'
import Loginimg2 from './Loginimg2.png'
import Loginimg3 from './Loginimg3.png'
import Loginimg4 from './Loginimg4.png'
import Loginimg5 from './Loginimg5.png'
import Loginimg6 from './Loginimg6.png'
import Loginimg7 from './Loginimg7.png'

import Mailbox from './mail-02.png'


function Login() {

    const [currentImage, setCurrentImage] = useState(Loginimg1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);



  const handleInputClick = () => {
    setCurrentImage(Loginimg2);
  };

  const handlePasswordClick = () => {
    setCurrentImage(Loginimg5);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (emailValue.includes('@gmail.com')) {
      setCurrentImage(Loginimg4);
    }
    
     else if (emailValue.length >= 10) {
      setCurrentImage(Loginimg3);
    } else {
      setCurrentImage(Loginimg2);  // Optionally revert back to Loginimg2 if less than 10 characters
    }
  };
  // Paaword logic
    const handlePasswordChange = (e) => {
      const passwordValue = e.target.value;
      setPassword(passwordValue);
      setCurrentImage(Loginimg6);
  
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setCurrentImage(Loginimg7);
  };
  return (
    <div>
            <div className='flex items-center justify-center min-h-screen bg-[#7879F1]'>
      <div className='flex flex-col items-center justify-center w-full max-w-md p-6 mt-10 bg-white rounded-md sm:w-3/4 md:w-2/3 lg:w-1/2'>
        <h1 className='text-3xl font-semibold text-[#5D5FEF] sm:text-4xl'>Login</h1>
        
        <div className='relative mt-8'>
          <img src={Logfonbgpic} alt='' className='w-[140px] h-[95px] object-cover sm:w-[186px] sm:h-[127px]' />
          <img src={currentImage} alt='' className='absolute w-[80px] h-[80px] top-4 left-4 sm:w-[108px] sm:h-[108px] sm:top-7 sm:left-7' />
        </div>
        
        <div className='relative w-full mt-10'>
          <h1 className='mb-2'>Email</h1>
          <div className='relative'>
            <input
              type='email'
              placeholder='Enter Email'
              onChange={handleEmailChange}

              onClick={handleInputClick}
              className='w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]'
            />
            <img
              src={Mailbox}
              alt='Mailbox'
              className='absolute w-6 h-6 transform -translate-y-1/2 top-1/2 right-3'
            />
          </div>
        </div>
        
        <div className='relative w-full mt-5'>
          <h1 className='mb-2'>Password</h1>
          <div className='relative'>
            <input
              type='password'
              placeholder='Enter Password'
              onClick={handlePasswordClick}
              onChange={handlePasswordChange}


              className='w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]'
            />
          </div>

        </div>
        
        
       

        <button className='w-full px-4 py-2 mt-10 text-white bg-[#5D5FEF] rounded-md sm:w-[250px] sm:h-[40px]'>
          Login
        </button>
      </div>
    </div>
    </div>
  )
}

export default Login
