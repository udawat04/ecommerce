import React from 'react'

import { Outlet } from 'react-router-dom'
import Nav1 from './Nav1'
import Header from './Header'

const Layout = () => {
  return (
    <div>
        <>
        <Header/>
        <Nav1/>
        <div><Outlet/></div>
        </>
    </div>
  )
}

export default Layout