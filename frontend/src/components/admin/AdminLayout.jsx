import React from 'react'
import { Outlet } from "react-router-dom";
import AdminSidebar from './AdminSidebar';
import AdminTopbar from './AdminTopbar';

const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <AdminSidebar />
            <div className='flex-1 flex flex-col overflow-hidden'>
                <AdminTopbar />
                <main className='flex-1 overflow-auto p-4 md:p-6 transition-all duration-300 md:ml-64'>
                    <div className='max-w-7xl mx-auto'>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AdminLayout