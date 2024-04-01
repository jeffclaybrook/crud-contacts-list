import Link from "next/link"
import { FiEdit } from "react-icons/fi"

const getContacts = async () => {
 try {
  const res = await fetch("http://localhost:3000/api/contacts", {
   cache: "no-store"
  })

  if (!res.ok) {
   throw new Error("Unable to fetch contacts")
  }

  return res.json()
 } catch (error) {
  console.log("Unable to load contacts", error)
 }
}

const ContactsTable = async () => {
 const { contacts } = await getContacts()

 return (
  <div className="overflow-x-auto">
   <table className="table">
    <thead>
     <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Action</th>
     </tr>
    </thead>
    <tbody>
     {contacts.map((item: any) => (
      <tr key={item.id}>
       <td>{item.name}</td>
       <td>{item.email}</td>
       <td>{item.phone}</td>
       <td>
        <Link href={`/editContact/${item._id}`} className="btn">
         <FiEdit />
        </Link>
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 )
}

export default ContactsTable