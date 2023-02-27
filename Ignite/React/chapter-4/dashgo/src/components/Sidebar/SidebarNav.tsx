import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri';
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function SidebarNav() {
	return (
		<Stack spacing='12' align='flex-start'>
			<NavSection title="GENERAL">
				<NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
				<NavLink href="/users" icon={RiContactsLine}>Users</NavLink>
			</NavSection>
			<NavSection title="AUTOMATION">
				<NavLink href="/forms" icon={RiInputMethodLine}>Forms</NavLink>
				<NavLink href="/automation" icon={RiGitMergeLine}>Automation</NavLink>
			</NavSection>
		</Stack>
	)
}