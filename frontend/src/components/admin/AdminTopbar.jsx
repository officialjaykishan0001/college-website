import React from 'react'
import { Menu, Bell } from 'lucide-react'
import { Button, Popover, Avatar, DropdownMenu, Separator } from '@radix-ui/themes';

const AdminTopbar = () => {
  return (
    <div>
      <header className='bg-white border-b border-gray-200 sticky top-0 z-30'>
        <div className='flex items-center justify-between h-16 px-4 md:px-6'>
          <div className='flex items-center flex-1'>
            <button className='p-2 rounded-md text-gray-500 hover:bg-gray-200 lg:hiden'>
              <Menu />
            </button>
            <div className='ml-2 lg:ml-0'>
              <h1 className='text-lg font-medium text-blue-800'>Welcome Admin</h1>
              <p className='text-sm text-gray-500'>
                Today is 15/05/2025
              </p>
            </div>
          </div>
          <div className='flex items-center spax-x-4'>
            <div className="flex gap-2 items-center ">
              <button className='p-2 rounded-full text-gray-500 hover:bg-gray-100 relative'>
                <Bell />
              </button>
              <Popover.Root>
                <Popover.Trigger>
                  <Avatar
                    size="2"
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                    fallback="A"
                    radius="full"
                  />
                </Popover.Trigger>
                <Popover.Content width="230px" size={1}>
                  <span className='font-bold'>My Account</span>
                  <Separator my="3" size="4" />
                  <div>Profile</div>
                  <div>Settings</div>
                  <Separator my="3" size="4" />
                  <div className='text-red-500'>Logout</div>
                </Popover.Content>
              </Popover.Root>

            </div>
          </div>
        </div>
      </header >
    </div >
  )
}

export default AdminTopbar