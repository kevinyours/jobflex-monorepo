import { Outlet, RouteObject } from 'react-router-dom';
import { NavigationLayout } from '../layouts/Navigation';
import { PAGES } from '../constants/route';
import Resume from '../pages/Resume';
import HomePage from '../pages/Home';

export const Routes: RouteObject[] = [
	{
		path: PAGES.HOME,
		element: (
			<NavigationLayout>
				<Outlet />
			</NavigationLayout>
		),
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: PAGES.RESUME,
				element: <Resume />,
			},
		],
	},
];
