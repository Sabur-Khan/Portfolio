import React from 'react'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa6";

const Rootlayouts = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <ScrollToTop smooth component={<p style={{ color: "blue", padding:"11px"}}><FaArrowUp/></p>}/>
        <div style={{ marginTop: "150vh", position:"absolute", color:"red"}} />
        <Footer/>
    </>
  )
}

export default Rootlayouts