import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import CustomTitleBar from '../components/layout/Titlebar';
import { Outlet } from 'react-router-dom';
import useSystemTheme from '@components/common/useSystemTheme';
import { StyleProvider } from '@components/common/StyleContext';

export const Layout: React.FC = () => {
  useSystemTheme();

  const isElectron = typeof window !== 'undefined' && !!window.electronAPI;

  const [styleType, setStyleType] = useState(() => {
    return localStorage.getItem('styleType') || 'style1';
  });

  const toggleStyle = () => {
    setStyleType(prev => {
      const newStyle = prev === 'style1' ? 'style2' : 'style1';
      localStorage.setItem('styleType', newStyle);
      return newStyle;
    });
  };

  return (
    <div
      className={`flex flex-col ${isElectron ? 'overflow-hidden w-screen h-screen' : ''}`}
      style={isElectron ? { boxSizing: 'border-box' } : undefined}
    >
      <StyleProvider>
        {isElectron && <CustomTitleBar />}
        <div className="flex flex-row h-full">
          <Navbar styleType={styleType} toggleStyle={toggleStyle} />
          <main
            className={`
              transition-all duration-500 ease-in-out
              ${styleType === 'style1' ? 'ml-[250px]' : 'ml-[60px]'}
              flex-grow dark:bg-gray-9 overflow-hidden
            `}
          >
            <Outlet />
          </main>
        </div>
      </StyleProvider>
    </div>
  );
};
