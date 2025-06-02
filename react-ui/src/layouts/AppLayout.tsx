import React from 'react'
import { Navbar } from '../components/Navbar'
import { Main } from '../components/Main'
import CustomTitleBar from '../components/Titlebar'

export const Layout: React.FC = () => {
  const isElectron = typeof window !== 'undefined' && !!window.electronAPI;
  return <div className={`flex flex-col ${isElectron ? 'overflow-hidden w-screen h-screen' : ''}`} style={isElectron ? { boxSizing: 'border-box' } : undefined}>
    {isElectron && <CustomTitleBar />}
    <div className='flex flex-row'>
      <Navbar/>
      <Main/>
    </div>
  </div>
}