import React from 'react'
import PageHeader from '@/app/components/PageHeader'

import { findAll } from "@/db/dao/userDao";
import UserList from '@/app/components/user/UserList';


const Users = async () => {
    const users = await findAll() // Fetching the posts from the database.

  return (
    <div>
        <PageHeader title="Users" hasCreateButton={true}  createLink={'users/new'}></PageHeader>
        <UserList users={users}></UserList>
    </div>
  )
}

export default Users