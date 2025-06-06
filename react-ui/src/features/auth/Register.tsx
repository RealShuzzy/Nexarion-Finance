import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '@assets/Banner_Dark.svg'

const Register: React.FC = () => {

  const [password, setPassword] = useState('');
    const navigate = useNavigate();

      const handleLogin = () => {
      if (password === 'mySecret') {
        localStorage.setItem('auth', 'true');
        navigate('/');

        window.electronAPI?.loginSuccess();
      } else {
        alert('Wrong password!');
      }
      };

  return (
    <div className='flex flex-col justify-between items-center h-[570px] w-[700px] p-[20px] bg-background-dark'>

      <div className="flex">
        <img src={banner} alt="Nexarion Logo" className='w-[250px]' />
      </div>

      <div className='flex-wrap'/>

      <div className='flex flex-col items-center'>
        <div className="flex text-center font-semibold text-xl text-white pb-1">Log in to your account</div>
        <div className="flex text-center text-sm text-text-gray">Welcome back! Please enter your details</div>
      </div>

      <div className='flex flex-col'>
        <div className="w-[450px] h-[300px] p-[30px] bg-background rounded-lg shadow-[0_0_12px_rgba(0,0,0,0.4)]">
          
          <form className='flex flex-col h-full justify-between'>

            <div className='flex flex-col space-y-1'>
              <label htmlFor="username" className='text-white font-semibold'>Username:</label>
              <input type="text" id="username" className='h-10 rounded-lg bg-field-dark border-border border'/>
            </div>
              
            <div className='flex flex-col space-y-1'>
              <label htmlFor="password" className='text-white font-semibold'>Password:</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className='h-10 rounded-lg bg-field-dark border-border border'/>
            </div>

            <button onClick={handleLogin} type="submit" className='h-10 rounded-lg bg-primary text-white font-semibold'>Login</button>

          </form>
            
        </div>

          <div className='flex justify-center text-blue-400 pt-2'>
            <p>Already have an account?t</p>
          </div>

      </div>

    </div>
  );
};

export default Register;
