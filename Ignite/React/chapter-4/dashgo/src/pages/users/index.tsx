import Header from '@/components/Header';
import Pagination from '@/components/Pagination';
import Sidebar from '@/components/Sidebar';
import { Box, Flex, Heading, Button, Icon, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Text, useBreakpointValue, Spinner } from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine } from 'react-icons/ri';
import useUsers from '@/services/hooks/useUsers';
import { useState } from 'react';


export default function UsersList() {
	const [page, setPage] = useState<number>(1);
	const { data, isLoading, isFetching, error } = useUsers(page);

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true
	});

	return (
		<Box>
			<Header />

			<Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
				<Sidebar />

				<Box flex='1' rounded='8' bg='gray.800' p='8'>
					<Flex mb='8' justify='space-between' align='center'>
						<Heading size='lg' fontWeight='normal'>
							Users
							{!isLoading && isFetching && (<Spinner size='sm' ml='4' color='gray.500' />)}
						</Heading>

						<Link href='/users/create' passHref>
							<Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine} />}>
								Create new
							</Button>
						</Link>
					</Flex>

					{
						isLoading ? (
							<Flex justify='center'>
								<Spinner />
							</Flex>
						) : error ? (
							<Flex justify='center'>
								<Text>Data not found!</Text>
							</Flex>
						) : (
							<>
								<Table colorScheme='whiteAlpha' >
									<Thead>
										<Tr>
											<Th px={['2', '4', '6']} color='gray.300' w='8'>
												<Checkbox colorScheme='pink' />
											</Th>
											<Th>User</Th>
											{isWideVersion && <Th>Register Date </Th>}
										</Tr>
									</Thead>
									<Tbody>
										{data?.users.map(user => (
											<Tr key={user.id}>
												<Td px={['2', '4', '6']}>
													<Checkbox colorScheme='pink' />
												</Td>
												<Td>
													<Text fontWeight='bold'>{user.name}</Text>
													<Text fontSize='sm' color='gray.300'>{user.email}</Text>
												</Td>
												{isWideVersion && <Td>
													{user.createdAt}
												</Td>}
											</Tr>
										))}
									</Tbody>
								</Table >

								<Pagination
									totalCountOfRegister={data.totalCount}
									currentPage={page}
									onPageChange={setPage}
								/>
							</>
						)
					}
				</Box >
			</Flex >
		</Box >
	);
}