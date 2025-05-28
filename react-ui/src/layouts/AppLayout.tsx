import React from 'react'
import { Navbar } from '../components/Navbar'
import { Main } from '../components/Main'

export const Layout: React.FC = () => {
  return <div id="layout">
    <Navbar/>
    <Main/>
  </div>
}
