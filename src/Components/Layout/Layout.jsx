import React, { useEffect } from 'react'

import { Outlet } from 'react-router-dom'
import Nav1 from './Nav1'
import Header from './Header'
import { useAuth } from '../../context/AuthContext'

const Layout = () => {
  const {setAuthenticate} = useAuth();
  const fetchMe = async ()=> {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const response = await fetch("http://localhost:4001/login",{
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization:`Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if(data.status===200) {
        setAuthenticate(true);
      }
      else {
        setAuthenticate(false);
      }
    }
  };
  useEffect(()=>{
    fetchMe();
  },[]);
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