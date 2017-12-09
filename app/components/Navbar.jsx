import React from 'react';
import { browserHistory, Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export const Navigation = function Navigation() {
	return (
		<Navbar inverse collapseOnSelect>
			<Navbar.Header>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<Navbar.Brand>
					<Link className="navbar-brand" to="/home">
						<img src="images/iyc.png" height="50px" />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullRight>
					<NavItem
						eventKey={1}
						onClick={e => browserHistory.push('/registration')}
					>
						Register
				</NavItem>
					<NavItem eventKey={2} onClick={e => browserHistory.push('/about')}>
						About
				</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
