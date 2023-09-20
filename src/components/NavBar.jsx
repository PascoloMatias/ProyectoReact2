import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";
import { Link } from 'react-router-dom';
    
export const NavBar = () => (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">MaseniShop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/category/guantes">GUANTES</Nav.Link>
        <Nav.Link as={Link} to="/category/EPP">EPP</Nav.Link>
      </Nav> <CartWidget />
    </Container>
  </Navbar>
 );