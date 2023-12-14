import Link from 'next/link';
import React from 'react'
import { FaRegEdit } from "react-icons/fa";

const EditBtn = ({id}) => {
  return (
    <div>
        <Link href={`/editTopic/${id}`} className='text-violet-500'>
         <FaRegEdit size={28}/>
        </Link>
    </div>
  )
}

export default EditBtn