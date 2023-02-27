import { SidebarDrawerProvider } from '@/context/SidebarDrawerContext'
import { makeServer } from '@/services/mirage'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

if (process.env.NODE_ENV === 'development') {
	makeServer();
}

const client = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={client}>
			<ChakraProvider theme={theme}>
				<SidebarDrawerProvider>
					<Component {...pageProps} />
				</SidebarDrawerProvider>
			</ChakraProvider>

			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}
