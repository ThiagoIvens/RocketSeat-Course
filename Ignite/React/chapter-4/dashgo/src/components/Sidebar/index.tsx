import { useSidebarDrawer } from "@/context/SidebarDrawerContext";
import { Box, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import SidebarNav from "./SidebarNav";

export default function Sidebar() {

	const {isOpen, onClose} = useSidebarDrawer()

	const isDrawerSidebar = useBreakpointValue({
		base: true,
		lg: false,
	});

	if (isDrawerSidebar) {
		return (
			<Drawer isOpen={isOpen} placement='left' onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent bg='gray.800' p='4'>
						<DrawerCloseButton mt='6' />
						<DrawerHeader>Navegation</DrawerHeader>

						<DrawerBody>
							<SidebarNav />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		)
	}

	return (
		<Box as='aside' w='64' mr='8'>
			<SidebarNav />
		</Box>
	)
}