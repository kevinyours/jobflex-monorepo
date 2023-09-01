import { PAGES } from '../../constants/route';

const Sidebar = () => {
	return (
		<div style={{ width: 240, background: 'teal' }}>
			<ul>
				<li>
					<a href={PAGES.remoteAppRoutingPrefix}>서비스 1</a>
				</li>
				<li>
					<a href='/setting'>서비스 2</a>
				</li>
				<li>메뉴 3</li>
				<li>메뉴 4</li>
				<li>메뉴 5</li>
				<li>메뉴 6</li>
			</ul>
		</div>
	);
};

export default Sidebar;
