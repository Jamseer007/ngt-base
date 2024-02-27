import { IUserList } from '@/app/types/user'
import React from 'react'
import PageHeader from '../PageHeader'

const UserList = ({users} : IUserList) => {
  return (
    <div>
        
        {
            users.length > 0 ?

            (<table className="table border table-zebra">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        users.map(user=> {
                            return <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-primary pr-5'>Edit</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>) :
            (<p>No records found!!</p>)
        }
    </div>
  )
}

export default UserList