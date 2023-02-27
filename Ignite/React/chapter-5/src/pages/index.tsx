import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

export default function Home() {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const { signIn, isAuthenticated } = useContext(AuthContext)


	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const data = {
			email,
			password
		}

		await signIn(data)
	}

	return (
		<>
			<Head>
				<title>AUTH</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<form onSubmit={handleSubmit} >
					<input
						type='email'
						name='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						type='password'
						name='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>

					<button type='submit'>Enviar</button>
				</form>
			</main>
		</>
	)
}