import React from 'react'
import CustomTitleBar from '../components/layout/Titlebar'
import Login from '../features/auth/Login';
import useSystemTheme from '@components/common/useSystemTheme';

export const LoginLayout: React.FC = () => {
  useSystemTheme()

  const isElectron = typeof window !== 'undefined' && !!window.electronAPI;
  return (
    <div
      className={`flex flex-col dark:bg-gray-10 ${isElectron ? 'overflow-hidden w-screen h-screen' : ''}`}
      style={isElectron ? { boxSizing: 'border-box' } : undefined}
    >
      {isElectron && <CustomTitleBar />}
      <div className="flex justify-center items-center bg-background-dark h-screen">
        <Login/>
      </div>
    </div>
  );
};

