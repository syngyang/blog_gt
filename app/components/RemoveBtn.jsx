'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";

const RemoveBtn = ({id}) => {
  const router = useRouter();

  const removeTopic = async()=>{
    const confirmed = confirm("삭제하겠습니까 ?")
    if (confirmed){
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      })
      if (res.ok){
        router.refresh('/')
      }
      
    }
    
  }

  return (
    <div className="text-red-700">
      <RiDeleteBin6Line onClick={removeTopic} size={30}/>
    </div>
  );
};

export default RemoveBtn;
