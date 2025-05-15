import React from 'react'
import { LogOut, ChevronLeft, LayoutDashboard, UsersRound, CalendarDays, UserPlus, Images, Book, Mail, Bell, Newspaper } from 'lucide-react'

const AdminSidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full z-40 transition-all duration-300 ease-in-out shadow-md bg-white w-64">
      <div className='h-full flex flex-col justify-between'>
        <div>
          <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold'>S</div>
              <span className='text-blue-800 text-xl font-semibold'>SGR PG COLLEGE</span>
            </div>
            <button className='rounded-full p-1 bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors'><ChevronLeft /></button>
          </div>
          <nav className='mt-4'>
            <ul className='space-y-1 px-2'>
              <li>
                <a href="/admin/dashboard" className='flex items-center p-3 rounded-lg hover:bg-blue-50 group transition-colors'>
                  <LayoutDashboard />
                  <span className='ml-3 text-sm font-medium text-gray-600  group-hover:text-blue-600'>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/admin/faculties" className='flex items-center p-3 rounded-lg hover:bg-blue-50 group transition-colors'>
                  <UsersRound />
                  <span className='ml-3 text-sm font-medium text-gray-600  group-hover:text-blue-600'>Faculties</span>
                </a>
              </li>
              <li>
                <a href="/admin/events" className='flex items-center p-3 rounded-lg hover:bg-blue-50 group transition-colors'>
                  <CalendarDays />
                  <span className='ml-3 text-sm font-medium text-gray-600  group-hover:text-blue-600'>Events</span>
                </a>
              </li>
              <li>
                <a href="/admin/notices" className='flex items-center p-3 rounded-lg hover:bg-blue-50 group transition-colors '>
                <Bell />
                  <span className='ml-3 text-sm font-medium text-gray-600  group-hover:text-blue-600'>Notice</span>
                </a>
              </li>
              <li>
                <a href="/admin/news" className='flex items-center p-3 rounded-lg hover:bg-blue-50 group transition-colors'>
                <Newspaper />
                  <span className='ml-3 text-sm font-medium text-gray-600  group-hover:text-blue-600'>News</span>
                </a>
              </li>
              <li>
                <a href="/admin/gallery" className='flex items-center p-3 rounded-lg hover:bg-blue-50 group transition-colors '>
                  <Images />
                  <span className='ml-3 text-sm font-medium text-gray-600  group-hover:text-blue-600'>Gallery</span>
                </a>
              </li>
              <li>
                <a href="/admin/contact-requests" className='flex items-center p-3 rounded-lg hover:bg-blue-50 group transition-colors '>
                  <Mail />
                  <span className='ml-3 text-sm font-medium text-gray-600  group-hover:text-blue-600'>Contact Requests</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='px-2 mb-4'>
          <button className='flex items-center w-full p-3 rounded-lg hover:bg-red-50 group transition-colors'>
            <LogOut />
            <span className='ml-3 text-sm font-medium text-gray-700 group-hover:text-red-600'>Log out</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar