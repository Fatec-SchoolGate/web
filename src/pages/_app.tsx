import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/configs/queryClient';
import NProgress from "nprogress";

import type { AppLayoutProps } from 'next/app'
import { useEffect, type ReactNode } from 'react';

import Middlewares from '@/@core/middlewares/Middlewares';
import ThemeContainer from '@/@core/theme/ThemeContainer';
import DefaultLayout from '@/layouts/DefaultLayout';

import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';

import "../configs/i18n";
import "../styles/global.css";
import LoadingSpinner from '@/@core/components/ui/loading-spinner';

const App = ({ Component, pageProps }: AppLayoutProps) => {

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
				<Toaster
					position={"bottom-center"}
				/>
				<LoadingSpinner/>
				<Middlewares
					authGuard={Component?.authGuard ?? true}
					guestGuard={Component?.guestGuard ?? false}
				>
					{getLayout(<Component {...pageProps} />)}
				</Middlewares>
			</ThemeContainer>
		</QueryClientProvider>
	);
}

export default App;