import { ReactNode } from "react"

interface MainProps {
 children: ReactNode
}

const Main = ({ children }: MainProps) => (
 <main className="mt-8 px-8">{children}</main>
)

export default Main