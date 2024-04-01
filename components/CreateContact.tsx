import Link from "next/link"
import { FiPlus } from "react-icons/fi"

const CreateContact = () => (
 <Link href={`/createContact`} className="btn btn-square fixed bottom-8 right-8">
  <FiPlus />
 </Link>
)

export default CreateContact