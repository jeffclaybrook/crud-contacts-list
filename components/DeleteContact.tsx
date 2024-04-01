"use client"

import { useRouter } from "next/navigation"
import { FaTrashAlt } from "react-icons/fa"

const DeleteContact = ({
 id
}: {
 id: string
}) => {
 const router = useRouter()

 const deleteContact = async () => {
  const confirmed = confirm("Are you sure you want to delete this contact?")

  if (confirmed) {
   const res = await fetch(`http://localhost:3000/api/contacts?id=${id}`, {
    method: "DELETE"
   })

   if (res.ok) {
    router.refresh()
   }
  }
 }

 return (
  <button className="btn btn-ghost" onClick={deleteContact}>
   <FaTrashAlt />
   Delete
  </button>
 )
}

export default DeleteContact