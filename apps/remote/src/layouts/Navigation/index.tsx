import { PropsWithChildren, useEffect } from 'react';
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';
import { Routes } from '../../routes/config';

export function NavigationLayout({ children }: PropsWithChildren) {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		function shellNavigationHandler(event: Event) {
			const pathname = (event as CustomEvent<string>).detail;

			if (
				location.pathname === pathname ||
				!matchRoutes(Routes, { pathname })
			) {
				return;
			}

			navigate(pathname);
		}

		window.addEventListener('[shell] navigated', shellNavigationHandler);

		return () => {
			window.removeEventListener('[shell] navigated', shellNavigationHandler);
		};
	}, [location]);

	useEffect(() => {
		window.dispatchEvent(
			new CustomEvent('[app1] navigated', { detail: location.pathname }),
		);
	}, [location]);

	return children;
}
