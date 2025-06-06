import React from 'react'
import CustomTitleBar from '../components/Titlebar'
import Login from '../components/Login';

export const LoginLayout: React.FC = () => {
  const isElectron = typeof window !== 'undefined' && !!window.electronAPI;
  return (
    <div
      className={`flex flex-col ${isElectron ? 'overflow-hidden w-screen h-screen' : ''}`}
      style={isElectron ? { boxSizing: 'border-box' } : undefined}
    >
      {isElectron && <CustomTitleBar />}
      <div className="flex justify-center items-center">
        <Login/>
      </div>
    </div>
  );
};

