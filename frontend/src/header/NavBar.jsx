import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
    <Navbar.Brand href="/">
        <img
          src='/logo.svg' // Use the imported image
          alt="Logo" // Add alt text for accessibility
          height="30" // Set the height as needed
          className="d-inline-block align-top" // Adjust styling as needed
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/browse-flicks">Browse Flicks</Nav.Link>
          <Nav.Link href="/post-flick">Post A Flick</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="/buy-ticket">Buy A Ticket</NavDropdown.Item>
            <NavDropdown.Item href="/premiere">Movie Premiere</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/free-tickets">Free Tickets</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar