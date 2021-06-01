import React, { useState } from 'react';

import { Navbar, Nav, NavDropdown, FormControl, Button } from 'react-bootstrap';

import logo from '../eog.png';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useHistory,
} from 'react-router-dom';
import TickerNews from './TickerNews';

function Header() {
	const [searchQuery, setSearchQuery] = useState('');
	const history = useHistory();
	const searchHandler = (e) => {
		e.preventDefault();
		history.push(`/search?search=${searchQuery}`, {
			search: `?query=${searchQuery}`,
		});
		setSearchQuery('');
	};

	return (
		<div>
			{/* Header
		    ================================================== */}
			<header className="clearfix">
				{/* Bootstrap navbar */}
				<Navbar className="logo-advertisement" expand="lg">
					<Navbar.Brand>
						<Link className="navbar-brand" to="/">
							<img src={logo} alt="" />
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/archive/news">News</Link>
							</li>
							<li>
								<Link to="/archive/publications">Issues</Link>
							</li>
							<li>
								<Link to="/archive/reports">Reports</Link>{' '}
							</li>
							<li>
								<Link to="/archive/tv">TV</Link>
							</li>
							<li>
								<Link to="/archive/maps">Concession Map</Link>
							</li>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				{/* End Bootstrap navbar */}
				<form
					onSubmit={searchHandler}
					className="d-flex justifyContent-center alignItems-center mx-auto my-3"
				>
					<input
						type="text"
						className="form-control"
						placeholder="Search Here"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<button type="submit" className="btn btn-primary">
						<i className="fa fa-search"></i>
					</button>
				</form>
			</header>
			{/* End Header */}
			<TickerNews />
		</div>
	);
}

export default Header;
