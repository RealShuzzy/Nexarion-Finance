import React from 'react'
import { Navbar } from '../components/layout/Navbar'
import CustomTitleBar from '../components/layout/Titlebar'
import { Outlet } from 'react-router-dom';
import useSystemTheme from '@components/common/useSystemTheme';

export const Layout: React.FC = () => {
  useSystemTheme()
  
  const isElectron = typeof window !== 'undefined' && !!window.electronAPI;
  return (
    <div
      className={`flex flex-col ${isElectron ? 'overflow-hidden w-screen h-screen' : ''}`}
      style={isElectron ? { boxSizing: 'border-box' } : undefined}
    >
      {isElectron && <CustomTitleBar />}
      <div className="flex flex-row h-full">
        <Navbar />
        <main className="flex-grow dark:bg-gray-9 p-[10px] overflow-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
