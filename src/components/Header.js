import React from 'react';
import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';

const headerContainer = 'flex items-end justify-evenly bg-green-300 p-10 text-white'; 
const nameHeading = 'text-6xl';
const navItems = [
	{
		content: 'About Me',
		href: '/',
	}, 
	{
		content: 'Portfolio',
		href: '/portfolio',
	},
	{
		content: 'Contact Me',
		href: '/contactMe',
	},
	{
		content: 'Resume',
		href: '/resume',
	}
]

function Header() {
	const currLocation = useLocation();

	return	(
		<div className={headerContainer}>
			<div>
				<h1 className={nameHeading}>Denzal Martin</h1>
			</div>
			<div>
				<ul className="flex">
					{
						navItems.map((navItem, i) => {
							return (
							<NavItem 
								content={navItem.content} 
								href={navItem.href} 
								active={currLocation.pathname}
								key={i}
							/>
						)})
					}
				</ul>
			</div>
		</div>
	)
}

export default Header;