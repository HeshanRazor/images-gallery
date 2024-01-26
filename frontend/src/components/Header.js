import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Logo } from '../Images/logo.svg';

const navbarStyle = {
  backgroundColor: '#eeeeee',
};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle}>
      <Container>
        <Logo style={{ maxWidth: '20rem', maxHeight: '2.5rem' }} />
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
};

export default Header;
