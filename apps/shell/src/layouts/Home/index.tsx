import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const HomeLayout: FC = () => {
	return (
		<div style={{ display: 'flex' }}>
			<Sidebar />
			<Outlet />
		</div>
	);
};

export default HomeLayout;
