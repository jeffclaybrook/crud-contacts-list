"use client"

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

const CreateContact = () => {
 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [phone, setPhone] = useState("")

 const router = useRouter()

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()

  if (!name || !email || !phone) {
   alert("All fields required")
  }

  try {
   const res = await fetch(`http://localhost:3000/api/contacts`, {
    method: "POST",
    headers: {
     "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, phone })
   })
   
   if (res.ok) {
    router.push("/")
    router.refresh()
   } else {
    throw new Error("Unable to create contact")
   }
  } catch (error) {
   console.log(error)
  }
 }

 return (
  <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
   <fieldset className="flex flex-col gap-3 w-full">
    <legend className="mb-3">Add Contact</legend>
    <input
     type="text"
     placeholder="Name"
     value={name}
     onChange={(e) => setName(e.target.value)}
     className="input input-bordered"
    />
    <input
     type="text"
     placeholder="Email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     className="input input-bordered"
    />
    <input
     type="text"
     placeholder="Phone"
     value={phone}
     onChange={(e) => setPhone(e.target.value)}
     className="input input-bordered"
    />
    <button className="btn" type="submit">Create</button>
   </fieldset>
  </form>
 )
}

export default CreateContact