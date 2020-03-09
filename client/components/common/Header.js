import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

const Header = ({header}) => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">
				{header}
			</Navbar.Brand>
			<Navbar.Text className="mr-sm-2">
				Created by: <a title="Go to Linkedin profile"
							   href="https://www.linkedin.com/in/alvarosouzasilva"
							   target="_blank"
							   rel="noreferrer noopener">Alvaro Silva</a>
			</Navbar.Text>
		</Navbar>
	);
};

export default Header;