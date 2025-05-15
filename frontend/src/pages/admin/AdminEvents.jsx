import { Badge, Button, Flex, Table } from '@radix-ui/themes'
import { Calendar, CirclePlus, Pencil, Trash2 } from 'lucide-react'
import React from 'react'

const AdminEvents = () => {
  return (
    <div className='space-y-6'>
      <div className="flex justify-between items-center">
        <h1 className='text-3xl font-semibold text-gray-800'>Event Management</h1>
        <Button color='blue'>
          <CirclePlus /> Add New Event
        </Button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className="rounded-lg border bg-white shadow-sm">
          <div className="flex  flex-col space-y-1 p-6 pb-2">
            <h3 className='text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-blue-600'>
              <Calendar /> Upcoming
            </h3>
          </div>
          <div className='p-6 pt-0'>
            <p className='text-3xl font-bold'>4</p>
          </div>
        </div>
        <div className="rounded-lg border bg-white shadow-sm">
          <div className="flex  flex-col space-y-1 p-6 pb-2">
            <h3 className='text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-green-600'>
              <Calendar /> Completed
            </h3>
          </div>
          <div className='p-6 pt-0'>
            <p className='text-3xl font-bold'>1</p>
          </div>
        </div>
        <div className="rounded-lg border bg-white shadow-sm">
          <div className="flex  flex-col space-y-1 p-6 pb-2">
            <h3 className='text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-amber-600'>
              <Calendar /> Total Events
            </h3>
          </div>
          <div className='p-6 pt-0'>
            <p className='text-3xl font-bold'>10</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg border bg-white shadow-sm ">
        <div className="flex flex-col space-y-1 p-6 pb-3">
          <h3 className='text-2xl font-semibold leading-none tracking-tight'>All Events</h3>
        </div>
        <div className="p-6 pt-0">
          <div className="relative w-full overflow-auto">
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Event Title</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell className='text-right'>Action</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>College Annual Sports Day</Table.RowHeaderCell>
                  <Table.Cell>2025-06-15</Table.Cell>
                  <Table.Cell>College Sports Ground</Table.Cell>
                  <Table.Cell><Badge color="blue">Upcoming</Badge></Table.Cell>
                  <Table.Cell className='text-right'>
                    <Flex align="end" justify="end" gap="3">
                      <Button variant='outline' color='gray' className='cursor-pointer'>
                        <Pencil /> Edit
                      </Button>
                      <Button variant='outline' color='red' >
                        <Trash2 /> Delete
                      </Button>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>College Annual Sports Day</Table.RowHeaderCell>
                  <Table.Cell>2025-06-15</Table.Cell>
                  <Table.Cell>College Sports Ground</Table.Cell>
                  <Table.Cell><Badge color="blue">Upcoming</Badge></Table.Cell>
                  <Table.Cell className='text-right'>
                    <Flex align="end" justify="end" gap="3">
                      <Button variant='outline' color='gray' className='cursor-pointer'>
                        <Pencil /> Edit
                      </Button>
                      <Button variant='outline' color='red' >
                        <Trash2 /> Delete
                      </Button>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>College Annual Sports Day</Table.RowHeaderCell>
                  <Table.Cell>2025-06-15</Table.Cell>
                  <Table.Cell>College Sports Ground</Table.Cell>
                  <Table.Cell><Badge color="blue">Upcoming</Badge></Table.Cell>
                  <Table.Cell className='text-right'>
                    <Flex align="end" justify="end" gap="3">
                      <Button variant='outline' color='gray' className='cursor-pointer'>
                        <Pencil /> Edit
                      </Button>
                      <Button variant='outline' color='red' >
                        <Trash2 /> Delete
                      </Button>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>College Annual Sports Day</Table.RowHeaderCell>
                  <Table.Cell>2025-06-15</Table.Cell>
                  <Table.Cell>College Sports Ground</Table.Cell>
                  <Table.Cell><Badge color="blue">Upcoming</Badge></Table.Cell>
                  <Table.Cell className='text-right'>
                    <Flex align="end" justify="end" gap="3">
                      <Button variant='outline' color='gray' className='cursor-pointer'>
                        <Pencil /> Edit
                      </Button>
                      <Button variant='outline' color='red' >
                        <Trash2 /> Delete
                      </Button>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>College Annual Sports Day</Table.RowHeaderCell>
                  <Table.Cell>2025-06-15</Table.Cell>
                  <Table.Cell>College Sports Ground</Table.Cell>
                  <Table.Cell><Badge color="blue">Upcoming</Badge></Table.Cell>
                  <Table.Cell className='text-right'>
                    <Flex align="end" justify="end" gap="3">
                      <Button variant='outline' color='gray' className='cursor-pointer'>
                        <Pencil /> Edit
                      </Button>
                      <Button variant='outline' color='red' >
                        <Trash2 /> Delete
                      </Button>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>College Annual Sports Day</Table.RowHeaderCell>
                  <Table.Cell>2025-06-15</Table.Cell>
                  <Table.Cell>College Sports Ground</Table.Cell>
                  <Table.Cell><Badge color="blue">Upcoming</Badge></Table.Cell>
                  <Table.Cell className='text-right'>
                    <Flex align="end" justify="end" gap="3">
                      <Button variant='outline' color='gray' className='cursor-pointer'>
                        <Pencil /> Edit
                      </Button>
                      <Button variant='outline' color='red' >
                        <Trash2 /> Delete
                      </Button>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>College Annual Sports Day</Table.RowHeaderCell>
                  <Table.Cell>2025-06-15</Table.Cell>
                  <Table.Cell>College Sports Ground</Table.Cell>
                  <Table.Cell><Badge color="green">Completed</Badge></Table.Cell>
                  <Table.Cell className='text-right'>
                    <Flex align="end" justify="end" gap="3">
                      <Button variant='outline' color='gray' className='cursor-pointer'>
                        <Pencil /> Edit
                      </Button>
                      <Button variant='outline' color='red' >
                        <Trash2 /> Delete
                      </Button>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminEvents