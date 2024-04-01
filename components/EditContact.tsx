"use client"

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import DeleteContact from "./DeleteContact"

interface EditContactProps {
 id: string
 name: string
 email: string
 phone: string
}

const EditContact = ({
 id,
 name,
 email,
 phone
}: EditContactProps) => {
 const [newName, setNewName] = useState(name)
 const [newEmail, setNewEmail] = useState(email)
 const [newPhone, setNewPhone] = useState(phone)

 const router = useRouter()

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()

  try {
   const res = await fetch(`http://localhost:3000/api/contacts/${id}`, {
    method: "PUT",
    headers: {
     "Content-Type": "application/json"
    },
    body: JSON.stringify({ newName, newEmail, newPhone })
   })

   if (res.ok) {
    router.push("/")
    router.refresh()
   } else {
    throw new Error("Unable to update contact")
   }
  } catch (error) {
   console.log(error)
  }
 }

 return (
  <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
   <fieldset className="flex flex-col gap-3 w-full">
    <legend className="mb-3">Edit Contact</legend>
    <input
     type="text"
     placeholder="Name"
     value={newName}
     onChange={(e) => setNewName(e.target.value)}
     className="input input-bordered"
    />
    <input
     type="text"
     placeholder="Email"
     value={newEmail}
     onChange={(e) => setNewEmail(e.target.value)}
     className="input input-bordered"
    />
    <input
     type="text"
     placeholder="Phone"
     value={newPhone}
     onChange={(e) => setNewPhone(e.target.value)}
     className="input input-bordered"
    />
    <button className="btn" type="submit">Update</button>
    <DeleteContact id={id} />
   </fieldset>
  </form>
 )
}

export default EditContact