import { Flex, useBreakpointValue, Icon, IconButton } from '@chakra-ui/react';
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'

import { RiMenuLine } from 'react-icons/ri'

import Logo from './Logo';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';
import Search from './Search';

export default function Header() {

	const { onOpen } = useSidebarDrawer()

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Flex
			as='header'
			w='100%'
			maxWidth={1480}
			h='20'
			mx='auto'
			mt='4'
			px='6'
			align='center'
		>
			{!isWideVersion && (
				<IconButton
					aria-label='Open Navigation'
					icon={<Icon as={RiMenuLine} />}
					fontSize='24'
					variant='unstyled'
					onClick={onOpen}
					mr='2'
				/>
			)}

			<Logo />

			{isWideVersion && <Search />}

			<Flex
				align='center'
				ml='auto'
			>
				<NotificationsNav />

				<Profile showProfileData={isWideVersion} />
			</Flex>
		</Flex>
	)
}