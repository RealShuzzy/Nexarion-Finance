import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import banner from '@assets/Banner_Dark.svg';

const Login: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    setTimeout(() => {
      usernameRef.current?.focus();
    }, 100);
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
     e.preventDefault();

  setErrorMessage('');
  setSuccessMessage('');

  try {
    const response = await fetch('http://shuzzy.duckdns.org:8000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      setErrorMessage(errorData.detail || 'Registration failed');
      return;
    }

    setSuccessMessage('Account created successfully!');

    try {
      const response = await fetch('http://shuzzy.duckdns.org:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.detail || 'Login failed');

        setTimeout(() => {
          passwordRef.current?.focus();
        }, 50);

        return;
      }

      const data = await response.json();
      localStorage.setItem('token', data.access_token);
      navigate('/');

      window.electronAPI?.loginSuccess();
    } catch (error) {
      setErrorMessage('Network error. Please try again.');

      setTimeout(() => {
        passwordRef.current?.focus();
      }, 50);
    }

    setTimeout(() => navigate('/'));
  } catch (error) {
    setErrorMessage('Network error. Please try again.');
  }
};


  return (
    <div className="flex flex-col justify-between items-center h-[570px] w-[700px] p-[20px] bg-background-dark">
      <div className="flex">
        <img src={banner} alt="Nexarion Logo" className="w-[250px]" />
      </div>

      <div className="flex-wrap" />

      <div className="flex flex-col items-center">
        <div className="flex text-center font-semibold text-xl text-white pb-1">Create a new account</div>
        <div className="flex text-center text-sm text-text-gray">Welcome on Board! Please enter your details</div>
      </div>

      <div className="flex flex-col">
        <div className="w-[450px] h-[300px] p-[30px] bg-background rounded-lg shadow-[0_0_12px_rgba(0,0,0,0.4)]">
          <form className="flex flex-col h-full justify-between text-white" onSubmit={handleRegister}>
            <div className="flex flex-col space-y-1">
              <label htmlFor="username" className="text-white font-semibold">Username:</label>
              <input
                ref={usernameRef}
                type="text"
                id="username"
                className="h-10 rounded-lg bg-field-dark border-border border p-3"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="password" className="text-white font-semibold">Password:</label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                className="h-10 rounded-lg bg-field-dark border-border border p-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className='flex-wrap'>

              {errorMessage && (
                <div className="text-red-400 text-sm text-center fixed left-1/2 -translate-x-1/2 translate-y-[-5px]">
                  {errorMessage}
                </div>
              )}

              {successMessage && (
                <div className="text-green-400 text-sm text-center fixed left-1/2 -translate-x-1/2 translate-y-[-5px]">
                  {successMessage}
                </div>
              )}



            </div>
            
            <button type="submit" className="h-10 rounded-lg bg-primary text-white font-semibold mt-2">Register</button>

          </form>
        </div>

        <div className="flex justify-center text-blue-400 pt-2">
          <Link to='/login'>
            <p>Already have an account?</p>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
