import React from 'react'
import CustomTitleBar from '../components/layout/Titlebar'
import Register from '../features/auth/Register';
import useSystemTheme from '@components/common/useSystemTheme';

export const RegisterLayout: React.FC = () => {
  useSystemTheme()

  const isElectron = typeof window !== 'undefined' && !!window.electronAPI;
  return (
    <div
      className={`flex flex-col dark:bg-gray-10 ${isElectron ? 'overflow-hidden w-screen h-screen' : ''}`}
      style={isElectron ? { boxSizing: 'border-box' } : undefined}
    >
      {isElectron && <CustomTitleBar />}
      <div className="flex justify-center items-center bg-background-dark h-screen">
        <Register/>
      </div>
    </div>
  );
};