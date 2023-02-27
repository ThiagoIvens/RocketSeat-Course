import { useState, useRef } from 'react'
import { Flex, Input, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri'

export default function Search() {
	// const [search, setSearch] = useState('')

	const searchInputRef = useRef<HTMLInputElement>(null)

	return (
		<Flex 
			as='label'
			flex='1'
			py='4'
			px='8'
			ml='6'
			maxWidth={400}
			alignSelf='center'
			color='gray.200'
			position='relative'
			bg='gray.800'
			rounded='full'
		>
			<Input
				color='gray.50'
				variant='unstyled'
				px='4'
				mr='4'
				placeholder='Search...'
				_placeholder={{
					color: 'gray.400'
				}}
				// value={search}
				// onChange={event =>setSearch(event.target.value)}
				ref={searchInputRef}
			/>

			<Icon as={RiSearchLine} fontSize='20' />

		</Flex>
	);
}