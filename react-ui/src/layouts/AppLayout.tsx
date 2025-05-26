import React from 'react'
import { Navbar } from '../components/Navbar'
import { Main } from '../components/Main'

export const Layout: React.FC = () => {
  return <div id="layout">
    <p>This is the Layout</p>
    <Navbar/>
    <Main/>
  </div>
}
