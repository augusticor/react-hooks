import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
			<div className='container-fluid'>
				<h6 className='navbar-brand'>Navbar</h6>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<NavLink exact activeClassName='active' className='nav-link' to='/'>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink exact activeClassName='active' className='nav-link' to='/login'>
								Login
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink exact activeClassName='active' className='nav-link' to='/about'>
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
