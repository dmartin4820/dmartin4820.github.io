import React from 'react';
import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';

const headerContainer = 'flex flex-col items-center xl:flex-row xl:items-end xl:justify-evenly bg-green-300 sm:p-10 text-white'; 
const nameHeading = 'text-5xl m-2 sm:m-0 sm:text-6xl';
const navContainer = 'm-2 md:m-0';
const navList = 'flex flex-col md:flex-row justify-center md:mt-5'; 
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
			<div className={navContainer}>
				<ul className={navList}>
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