// https://github.com/nebarf/module-federation-react-router-dom

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Routes } from './config';

const browserRouter = createBrowserRouter(Routes);

export function Router() {
	return <RouterProvider router={browserRouter} />;
}
