import { Input } from '@/components/Form/Input';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Box, Flex, Heading, Divider, VStack, HStack, SimpleGrid, Button } from '@chakra-ui/react'
import Link from 'next/link';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const signInFormSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().required().email(),
	password: yup.string().required(),
	password_confirmation: yup.string().required(),

})

export default function CreateUser() {	
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(signInFormSchema)
	})

	const { errors } = formState;

	const handleCreate: SubmitHandler<FieldValues> = async (values)=> {
		await new Promise(resolve => setTimeout(resolve, 2000))
		
		console.log(values)
	}

	return (
		<Box>
			<Header />

			<Flex
			    w='100%'
			    my='6'
			    maxWidth={1480}
			    mx='auto'
			    px='6'
			>
				<Sidebar />

				<Box
				    as='form'
				    onSubmit={handleSubmit(handleCreate)}
				    flex='1'
				    rounded='8'
				    bg='gray.800'
				    p={['6',
				    '8']}
				>
					<Heading
					    size='lg'
					    fontWeight='normal'
					>
						Create user
					</Heading>

					<Divider my='6' borderColor='gray.700' />

					<VStack spacing='8'>
						<SimpleGrid
						    minChildWidth='240px'
						    spacing={['6',
						    '8']}
						    w='100%'
						>
							<Input
							    label='Fullname'
								error={errors.name}
								{...register('name')}
							/>
							<Input
							    label='E-mail'
							    type='email'
								error={errors.email}
								{...register('email')}
							/>
						</SimpleGrid>
						<SimpleGrid
						    minChildWidth='240px'
						    spacing={['6',
						    '8']}
						    w='100%'
						>
							<Input
							    label='Password'
							    type='password'
								error={errors.password}
								{...register('password')}
							/>
							<Input
							    label='Password
							    Confirmation'
							    type='password'
								error={errors.password_confirmation}
								{...register('password_confirmation')}
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt='8' justify='flex-end'>
						<HStack spacing='4'>
							<Link href='/users' passHref>
								<Button as='a' colorScheme='whiteAlpha'>Cancel</Button>
							</Link>
							<Button colorScheme='pink' type='submit' isLoading={formState.isSubmitting}>Save</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}