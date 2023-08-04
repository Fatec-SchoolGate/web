import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/configs/queryClient';
import NProgress from "nprogress";

import type { AppLayoutProps } from 'next/app'
import { useEffect, type ReactNode } from 'react';

import AuthMiddleware from '@/@core/middlewares/AuthMiddleware';
import ThemeContainer from '@/@core/theme/ThemeContainer';
import DefaultLayout from '@/layouts/DefaultLayout';

import "../configs/i18n";
import "../styles/global.css";
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppLayoutProps) {

	const getLayout = Component.getLayout || ((page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>);
	const router = useRouter();

	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();
		
		router.events.on("routeChangeStart", handleRouteStart);
		router.events.on("routeChangeComplete", handleRouteDone);
		router.events.on("routeChangeError", handleRouteDone);
		
		return () => {
			router.events.off("routeChangeStart", handleRouteStart);
			router.events.off("routeChangeComplete", handleRouteDone);
			router.events.off("routeChangeError", handleRouteDone);
		};
	}, []);

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
