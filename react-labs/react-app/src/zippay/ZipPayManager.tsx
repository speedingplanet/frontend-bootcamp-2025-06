import React from 'react';
import Navbar from './BootstrapNavbar';
import './zippay.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SendReceive from './SendReceive';
import Balance from './Balance';

function ZipPayManager() {
	return (
		<section className="zippay-main">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col">
						<Routes>
							<Route
								path="/"
								element={<h2>Content goes here</h2>}
							/>
							<Route
								path="send-receive"
								element={<SendReceive />}
							/>
							<Route
								path="split-the-bill"
								element={<h2>Split-the-bill placeholder</h2>}
							/>
							<Route
								path="balance"
								element={<Balance />}
							/>
							<Route
								path="account-settings"
								element={<h2>Account Settings placeholder</h2>}
							/>
							<Route
								path="search"
								element={<h2>Search placeholder</h2>}
							/>
						</Routes>
					</div>
				</div>
			</div>
			<ToastContainer />
		</section>
	);
}

export default ZipPayManager;
