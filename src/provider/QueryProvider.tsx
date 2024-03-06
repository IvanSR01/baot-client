import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'


const client = new QueryClient()

interface IQueryProvider {
	children: ReactNode
}

const QueryProvider: FC<IQueryProvider> = ({ children }) => {
	return (
		<QueryClientProvider client={client}>
			{children}
		</QueryClientProvider>
	)
}
export default QueryProvider