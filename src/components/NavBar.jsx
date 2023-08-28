import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";
    
export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">MaseniShop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">HOME</Nav.Link>
        <Nav.Link href="/category/guantes">GUANTES</Nav.Link>
        <Nav.Link href="/category/EPP">EPP</Nav.Link>
      </Nav> <CartWidget />
    </Container>
  </Navbar>
 );