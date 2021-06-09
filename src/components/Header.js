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
import { Dropdown } from 'bootstrap';

function Header() {
	const [searchQuery, setSearchQuery] = useState('');
	const [showDropDown, setShowDropDown] = useState(undefined);
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
			<header
				className="clearfix"
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL + '/header-banner.jpg'
					})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			>
				{/* Bootstrap navbar */}
				<Navbar
					className="logo-advertisement"
					expand="lg"
					style={{
						backgroundImage: `url(${
							process.env.PUBLIC_URL + '/header-banner.jpg'
						})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
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
								<NavDropdown
									id="nav-dropdown-light-example"
									title="News"
									menuVariant="light"
								>
									<NavDropdown.Item>
										<Link to={`/archive/news/11221`}>Egypt</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link to={`/archive/news/11222`}>International</Link>
									</NavDropdown.Item>
								</NavDropdown>
							</li>
							<li>
								<NavDropdown
									id="nav-dropdown-light-example"
									title="Issues"
									menuVariant="light"
								>
									<NavDropdown.Item>
										<Link to={`/archive/publications/11220`}>
											{' '}
											Egypt oil & gas newspaper
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link to={`/archive/publications/14266`}>Supplements</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link to={`/archive/publications/14090`}>
											EOG/Ministry of Petroleum Publications
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link to={`/archive/publications/19894`}>EGYPS 2020</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link to={`/archive/publications/12625`}>EGYPS 2019</Link>
									</NavDropdown.Item>
								</NavDropdown>
							</li>
							<li>
								<NavDropdown
									id="nav-dropdown-light-example"
									title="Events"
									menuVariant="light"
								>
									<NavDropdown.Item>
										<Link to={`/archive/events_coverage/8377`}>Conference</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link to={`/archive/events_coverage/8825`}>
											Conventions
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link to={`/archive/events_coverage/8380`}>
											Roundtables
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link to={`/archive/events_coverage/8381`}>Trainings</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link to={`/archive/events_coverage/8379`}>workshops</Link>
									</NavDropdown.Item>
								</NavDropdown>
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
					style={{
						backgroundImage: `url(${
							process.env.PUBLIC_URL + '/header-banner.jpg'
						})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
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
