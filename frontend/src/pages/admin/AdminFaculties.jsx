import React from 'react'
import { Plus, Ellipsis, Pencil, Trash2 } from 'lucide-react'
import { TextField, Button, Table, Popover, Separator } from '@radix-ui/themes'

const AdminFaculties = () => {
  return (
    <div className='space-y-6'>
      <div className="flex justify-between items-center">
        <h1 className='text-3xl font-semibold text-gray-800'>Faculty Management</h1>
      </div>
      <div className="rounded-lg border bg-white text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1 p-6 pb-3">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Faculty Members</h3>
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
  )
}

export default AdminFaculties