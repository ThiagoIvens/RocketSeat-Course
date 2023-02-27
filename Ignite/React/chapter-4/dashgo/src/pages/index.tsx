import { Input } from '@/components/Form/Input'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const signInFormSchema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required(),
})

export default function Home() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(signInFormSchema)
	})

	const { errors } = formState;

	const handleSignIn: SubmitHandler<FieldValues> = async (values)=> {
		await new Promise(resolve => setTimeout(resolve, 2000))
		
		console.log(values)
	}

	return (
		<Flex
			w='100vw'
			h='100vh'
			align='center'
			justify='center'
		>
			<Flex
				as='form'
				w='100%'
				maxWidth={360}
				bg='gray.800'
				rounded={8}
				p={8}
				flexDir='column'
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing={4}>
					<Input
					    label='E-mail'
					    type='email'
						error={errors.email}
					    {...register('email')}
					/>
					<Input
					    label='Password'
					    type='password'
						error={errors.password}
					    {...register('password')}
					/>
				</Stack>
				<Button
					type='submit'
					mt='6'
					colorScheme='pink'
					size='lg'
					isLoading={formState.isSubmitting}
					>
					Sign In
				</Button>
			</Flex>
		</Flex>
	)
}
