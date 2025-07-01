import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import banner from '@assets/Banner_Dark.svg';

const Login: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      usernameRef.current?.focus();
    }, 100);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://shuzzy.duckdns.org:8000/auth/login', {
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
      localStorage.setItem('username', data.username);
      navigate('/');

      window.electronAPI?.loginSuccess();
    } catch (error) {
      setErrorMessage('Network error. Please try again.');

      setTimeout(() => {
        passwordRef.current?.focus();
      }, 50);
    }
  };


  return (
    <div className="flex flex-col justify-between items-center dark:bg-gray-10 p-[20px] w-[700px] h-[570px] dark:text-white">
      <div className="flex">
        <img src={banner} alt="Nexarion Logo" className="w-[250px]" />
      </div>

      <div className="flex-grow" />

      <div className="flex flex-col items-center mb-5">
        <div className="flex pb-1 font-semibold text-xl text-center">Log in to your account</div>
        <div className="flex text-gray-4 text-sm text-center">Welcome back! Please enter your details</div>
      </div>

      <div className="flex flex-col">
        <div className="dark:bg-gray-9 shadow-[0_0_12px_rgba(0,0,0,0.4)] p-[30px] rounded-lg w-[450px] h-[300px]">
          <form className="flex flex-col justify-between h-full" onSubmit={handleLogin}>
            <div className="flex flex-col space-y-1">
              <label htmlFor="username" className="font-semibold">Username:</label>
              <input
                ref={usernameRef}
                type="text"
                id="username"
                placeholder="Username"
                className="dark:bg-field-dark p-3 border-[2px] border-gray-5 dark:border-gray-7 rounded-lg h-10"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="password" className="font-semibold text-white">Password:</label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                placeholder="Password"
                className="dark:bg-field-dark p-3 border-[2px] border-gray-5 dark:border-gray-7 rounded-lg h-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              {errorMessage && (
              <div className="left-1/2 fixed text-red-400 text-sm text-center -translate-x-1/2 translate-y-[-5px]">
                {errorMessage}
              </div>
              )}
            </div>
            
            <button type="submit" className="bg-primary mt-2 rounded-lg h-10 font-semibold text-white">Login</button>

          </form>
        </div>

        <div className="flex justify-center pt-2 text-blue-400">
          <Link to='/register'>
            <p>Register a new account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
