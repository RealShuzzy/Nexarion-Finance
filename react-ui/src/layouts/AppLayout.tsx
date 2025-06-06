import React from 'react'
import { Navbar } from '../components/Navbar'
import CustomTitleBar from '../components/Titlebar'
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  const isElectron = typeof window !== 'undefined' && !!window.electronAPI;
  return (
    <div
      className={`flex flex-col ${isElectron ? 'overflow-hidden w-screen h-screen' : ''}`}
      style={isElectron ? { boxSizing: 'border-box' } : undefined}
    >
      {isElectron && <CustomTitleBar />}
      <div className="flex flex-row h-full">
        <Navbar />
        <main className="flex-grow p-[10px] overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
