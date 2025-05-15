import React from 'react'
import { Plus, Ellipsis, UsersRound, MoveUpRight, CalendarDays, MailOpen, Pencil, Trash2 } from 'lucide-react'
import { TextField, Button, Table, Popover, Separator } from '@radix-ui/themes'

const Dashboard = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-2xl font-bold text-gray-800 mb-2'>Dashboard</h1>
        <p className='text-gray-500'>Overview of your college management system</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-lg border bg-white text-card-foreground shadow-sm hover:shadow-md transition-shadow">
          <div className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className='text-sm font-medium text-gray-500'>Total Faculty</p>
                <h3 className='text-2xl font-bold mt-1 text-gray-800'>124</h3>
              </div>
              <div className="bg-blue-50 p-2 rounded-lg">
                <UsersRound />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <span className='text-xs font-medium flex items-center text-green-500'>
                <MoveUpRight />
                +4%
              </span>
              <span className='text-xs text-gray-500 ml-1'>From last month</span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white text-card-foreground shadow-sm hover:shadow-md transition-shadow">
          <div className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className='text-sm font-medium text-gray-500'>Upcoming Events</p>
                <h3 className='text-2xl font-bold mt-1 text-gray-800'>12</h3>
              </div>
              <div className="bg-blue-50 p-2 rounded-lg">
                <CalendarDays />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <span className='text-xs font-medium flex items-center text-green-500'>
                <MoveUpRight />
                +2%
              </span>
              <span className='text-xs text-gray-500 ml-1'>From last week</span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white text-card-foreground shadow-sm hover:shadow-md transition-shadow">
          <div className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className='text-sm font-medium text-gray-500'>Contact Requests</p>
                <h3 className='text-2xl font-bold mt-1 text-gray-800'>28</h3>
              </div>
              <div className="bg-blue-50 p-2 rounded-lg">
                <MailOpen color="#ddcf0e" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <span className='text-xs font-medium flex items-center text-blue-500'>
                5 unread
              </span>
              <span className='text-xs text-gray-500 ml-1'>New messages</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className='rounded-lg border bg-white text-card-foreground lg:col-span-3 shadow-sm' >
          <div className="flex flex-col space-y-1 p-6 pb-3 ">
            <h3 className="tracking-tight text-lg font-semibold text-gray-800">Faculty Management</h3>
            <p className='text-sm text-gray-500 '>view and manage faculty information</p>
          </div>
          <div className="p-6 pt-0">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <TextField.Root
                    color="indigo"
                    variant="soft"
                    placeholder="Search faculty..."
                  />
                </div>
                <Button color='blue'>
                  <Plus /> Add New Faculty
                </Button>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <div className="relative w-full overflow-auto">
                  <Table.Root>
                    <Table.Header>
                      <Table.Row>
                        <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Contact</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>role</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row>
                        <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                        <Table.Cell>danilo@example.com</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                        <Table.Cell>
                          <Popover.Root>
                            <Popover.Trigger>
                              <Ellipsis />
                            </Popover.Trigger>
                            <Popover.Content width="100px" size={1}>
                              <div className="flex text-sm cursor-pointer items-center gap-1">
                                <Pencil />
                                <span>Edit</span>
                              </div>
                              <Separator my="3" size="4" />
                              <div className='flex text-red-500 gap-1 text-sm cursor-pointer items-center'>
                                <Trash2 />
                                <span >delete</span>
                              </div>
                            </Popover.Content>
                          </Popover.Root>
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row>
                        <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                        <Table.Cell>zahra@example.com</Table.Cell>
                        <Table.Cell>Admin</Table.Cell>
                        <Table.Cell>
                          <Popover.Root>
                            <Popover.Trigger>
                              <Ellipsis />
                            </Popover.Trigger>
                            <Popover.Content width="100px" size={1}>
                              <div className="flex text-sm cursor-pointer items-center gap-1">
                                <Pencil />
                                <span>Edit</span>
                              </div>
                              <Separator my="3" size="4" />
                              <div className='flex text-red-500 gap-1 text-sm cursor-pointer items-center'>
                                <Trash2 />
                                <span >delete</span>
                              </div>
                            </Popover.Content>
                          </Popover.Root>
                        </Table.Cell>

                      </Table.Row>

                      <Table.Row>
                        <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                        <Table.Cell>jasper@example.com</Table.Cell>
                        <Table.Cell>SuperAdmin</Table.Cell>
                        <Table.Cell>
                          <Popover.Root>
                            <Popover.Trigger>
                              <Ellipsis />
                            </Popover.Trigger>
                            <Popover.Content width="100px" size={1}>
                              <div className="flex text-sm cursor-pointer items-center gap-1">
                                <Pencil />
                                <span>Edit</span>
                              </div>
                              <Separator my="3" size="4" />
                              <div className='flex text-red-500 gap-1 text-sm cursor-pointer items-center'>
                                <Trash2 />
                                <span >delete</span>
                              </div>
                            </Popover.Content>
                          </Popover.Root>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table.Root>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard