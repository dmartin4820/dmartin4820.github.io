import React from 'react';
import { Link } from 'react-router-dom';


function NavItem(props) {
	const linkActive = 'text-green-900';
	const linkNotActive = 'text-white';
	const active = props.active === props.href ? linkActive: linkNotActive;
	
	return (
		<li className='px-10 text-2xl'>
			<Link className={active} to={props.href}>{props.content}</Link>
		</li>
	)
}

export default NavItem;