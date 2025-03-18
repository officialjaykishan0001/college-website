import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen mx-auto m-1">
            <Navbar />
            <main className="flex-grow"><Outlet /></main>
            <Footer />
        </div>
    )
}

export default Layout