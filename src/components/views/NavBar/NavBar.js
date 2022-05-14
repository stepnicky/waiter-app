import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand='lg' className='rounded mt-5 mb-4'>
            <Container>
                <Navbar.Brand as={Link} to='/'>Waiter.app</Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'></Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                </Nav>  
            </Container>
        </Navbar>
    );
};

export default NavBar;