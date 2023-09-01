import { Navigate, RouteObject } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HomeLayout from '../layouts/Home';
import { PAGES } from '../constants/route';
import SettingPage from '../pages/Setting';

const RemoteAppLazy = lazy(() => import('remoteApp/App'));

export const Routes: RouteObject[] = [
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Navigate to={`/${PAGES.remoteAppRoutingPrefix}`} />,
			},
			{
				path: `/${PAGES.remoteAppRoutingPrefix}/*`,
				element: (
					<Suspense fallback={'Loading Remote App...'}>
						<RemoteAppLazy />
					</Suspense>
				),
			},
		],
	},
	{
		path: '/setting',
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <SettingPage />,
			},
		],
	},
];
