import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import CustomTitleBar from '../components/layout/Titlebar';
import { Outlet } from 'react-router-dom';
import useSystemTheme from '@components/common/useSystemTheme';
import { StyleProvider, useStyle } from '@components/common/StyleContext';

export const Layout: React.FC = () => {
  useSystemTheme();

  const isElectron = typeof window !== 'undefined' && !!window.electronAPI;

  return (
    <StyleProvider>
      <InnerLayout isElectron={isElectron} />
    </StyleProvider>
  );
};


const InnerLayout: React.FC<{ isElectron: boolean }> = ({ isElectron }) => {
  const { styleType, toggleStyle } = useStyle();

  // Style margin
  let marginStyle
  switch (styleType){
    case 'style1': 
      marginStyle = 'ml-[250px]'
      break
    case 'style2': 
      marginStyle = 'ml-[60px]'
      break
    case 'styleS': 
      marginStyle = 'mt-[60px]'
      break
    }

  return (
    <div
      className={`flex flex-col ${isElectron ? 'overflow-hidden w-screen h-screen' : ''}`}
      style={isElectron ? { boxSizing: 'border-box' } : undefined}
    >
      {isElectron && <CustomTitleBar />}
      <div className={`flex ${styleType === 'styleS' ? 'flex-col' : 'flex-row'} h-full`}>
        <Navbar styleType={styleType} toggleStyle={toggleStyle} />
        <main
          className={`
            transition-all duration-500 ease-in-out
            ${marginStyle}
            flex-grow dark:bg-gray-9 overflow-hidden
          `}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};