import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/configs/queryClient';

import type { AppLayoutProps } from 'next/app'
import type { ReactNode } from 'react';

import AuthMiddleware from '@/@core/middlewares/AuthMiddleware';
import ThemeContainer from '@/@core/theme/ThemeContainer';
import DefaultLayout from '@/layouts/DefaultLayout';

import "../configs/i18n";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppLayoutProps) {

	const getLayout = Component.getLayout || ((page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>);

	return (
		<QueryClientProvider
			client={queryClient}
		>
			<ThemeContainer>
				<AuthMiddleware>
					{getLayout(<Component {...pageProps} />)}
				</AuthMiddleware>
			</ThemeContainer>
		</QueryClientProvider>
	);
}
