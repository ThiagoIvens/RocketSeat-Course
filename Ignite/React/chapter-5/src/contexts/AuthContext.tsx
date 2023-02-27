import { api } from "@/services/api";
import { createContext, ReactNode, useEffect, useState } from "react";
import Router from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

type User = {
	email: string;
	permissions: string[];
	roles: string[];
}

type SignInCredentials = {
	email: string;
	password: string;
}

type AuthContextData = {
	user: User;
	signIn: (credentials: SignInCredentials) => Promise<void>;
	isAuthenticated: boolean;
}

type AuthProviderProps = {
	children: ReactNode
}

export function signOut() {
	destroyCookie(undefined, '@jassy:token');
	destroyCookie(undefined, '@jassy:refreshToken');

	Router.push('/')
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User>({} as User)
	const isAuthenticated = !!user;

	useEffect(() => {
		const { '@jassy:token': token } = parseCookies()

		if (token) {
			api.get('/me').then(response => {
				const { email, roles, permissions } = response.data;
				setUser({ email, roles, permissions })
			}).catch(() => {
				signOut
			})
		}
	}, [])

	async function signIn({ email, password }: SignInCredentials) {

		try {
			const response = await api.post('sessions', { email, password })

			const { permissions, roles, token, refreshToken } = response.data

			setCookie(undefined, '@jassy:token', token, {
				maxAge: 60 * 60 * 24 * 30,
				path: '/',
			})
			setCookie(undefined, '@jassy:refreshToken', refreshToken, {
				maxAge: 60 * 60 * 24 * 30,
				path: '/',
			})


			setUser({
				email,
				permissions,
				roles,
			})

			api.defaults.headers['Authorization'] = `Bearer ${token}`

			Router.push('/dashboard')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<AuthContext.Provider value={{
			user,
			signIn,
			isAuthenticated,
		}}>
			{children}
		</AuthContext.Provider>
	)
}