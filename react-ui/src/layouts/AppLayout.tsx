import React from 'react'
import { Navbar } from '../components/Navbar'
import { Main } from '../components/Main'
import CustomTitleBar from '../components/Titlebar'

export const Layout: React.FC = () => {
  const isElectron = typeof window !== 'undefined' && !!window.electronAPI;
  return <div id="layout" className={isElectron ? 'electron-no-scrollbars' : ''}>
    {isElectron && <CustomTitleBar />}
    <div id="wrapper">
      <Navbar/>
      <Main/>
    </div>
  </div>
}
