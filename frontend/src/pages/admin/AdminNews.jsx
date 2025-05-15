import React from 'react'
import { Table } from '@radix-ui/themes'
const AdminNews = () => {
  return (
    <div className='space-y-6'>
      <div className="flex items-center justify-between">
        <h1 className='text-2xl font-bold tracking-tight'>News Management</h1>
        <button className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2'>
          <span className='hidden sm:inline'>Add New Article</span>
          <span className='sm:hidden'>Add New</span>
        </button>
      </div>
      <div className="bg-white rounded-lg border shadow-sm p-6">
        <div className="overflow-auto">
          <Table.Root variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>TITLE</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>PUBLISHED DATE</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>AUTHOR</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='text-right'>ACTION</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>College Ranks #1 in Regional Survey</Table.RowHeaderCell>
                <Table.Cell>2025-05-10</Table.Cell>
                <Table.Cell>Admin Team</Table.Cell>
                <Table.Cell className='text-right'>
                  <span className='text-blue-600 hover:text-blue-900 mr-4 cursor-pointer'>Edit</span>
                  <span className='text-red-600 hover:text-red-900 cursor-pointer'>Delete</span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>New Science Building Inauguration</Table.RowHeaderCell>
                <Table.Cell>2025-05-10</Table.Cell>
                <Table.Cell>	PR Department</Table.Cell>
                <Table.Cell className='text-right'>
                  <span className='text-blue-600 hover:text-blue-900 mr-4 cursor-pointer'>Edit</span>
                  <span className='text-red-600 hover:text-red-900 cursor-pointer'>Delete</span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Upcoming Cultural Festival Details</Table.RowHeaderCell>
                <Table.Cell>2025-05-10</Table.Cell>
                <Table.Cell>Student Council</Table.Cell>
                <Table.Cell className='text-right'>
                  <span className='text-blue-600 hover:text-blue-900 mr-4 cursor-pointer'>Edit</span>
                  <span className='text-red-600 hover:text-red-900 cursor-pointer'>Delete</span>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>

        </div>
      </div>
    </div>
  )
}

export default AdminNews