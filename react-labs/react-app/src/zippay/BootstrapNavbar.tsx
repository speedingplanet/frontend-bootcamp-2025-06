import React from 'react';
import { NavLink } from 'react-router-dom';

const BootstrapNavbar = () => {
	return (
		<nav className="navbar btn-group">
			<NavLink
				className="btn btn-outline-primary"
				to="send-receive"
			>
				<span className="material-icons">currency_exchange</span>
				<br />
				Send-Receive
			</NavLink>
			<NavLink
				className="btn btn-outline-primary"
				to="split-the-bill"
			>
				<span className="material-icons">call_split</span>
				<br />
				Split the bill
			</NavLink>
			<NavLink
				className="btn btn-outline-primary"
				to="balance"
			>
				<span className="material-icons">savings</span>
				<br />
				Balance
			</NavLink>
			<NavLink
				className="btn btn-outline-primary"
				to="account-settings"
			>
				<span className="material-icons">settings</span>
				<br />
				Account settings
			</NavLink>
			<NavLink
				className="btn btn-outline-primary"
				to="search"
			>
				<span className="material-icons">search</span>
				<br />
				Search
			</NavLink>
		</nav>
	);
};

export default BootstrapNavbar;
