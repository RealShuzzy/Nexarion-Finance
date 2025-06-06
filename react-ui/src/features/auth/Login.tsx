import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
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
    <div className="h-screen flex items-center justify-center text-white">
      <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl mb-4">Login</h2>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-[#1a1a1a] text-white"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
