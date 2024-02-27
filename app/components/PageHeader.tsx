import React from 'react'
import { AppPageHeader } from '../types/AppPageHeader'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';

const PageHeader = ({title, hasCreateButton, createLink}: AppPageHeader) => {
  return (
    <div className="grid grid-cols-2 border-b-2 border-grey p-2 mb-5">
        <div className="text-10xl">{ title }</div>
        {
            hasCreateButton && 
            (<div className="flex justify-end">
                  
                    <Link  href={createLink}><Button className='btn btn-primary'>New User</Button></Link>
                  
            </div>)
        }
    </div>
  )
}

export default PageHeader