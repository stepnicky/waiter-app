import clsx from "clsx";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand='lg' className={clsx('rounded', 'mt-5', 'mb-4')}>
            <Container>
                <Navbar.Brand as={Link} to='/'>Waiter.app</Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'></Navbar.Collapse>
                <Nav>
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                </Nav>  
            </Container>
        </Navbar>
    );
};

export default NavBar;