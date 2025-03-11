import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen mx-auto m-1">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout