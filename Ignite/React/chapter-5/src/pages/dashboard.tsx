import { AuthContext } from "@/contexts/AuthContext"
import { useContext } from "react"

export default function Dashboard() {
	const {user} = useContext(AuthContext)
	return (
		<h1>Dashboard {user?.email}</h1>
	)
}