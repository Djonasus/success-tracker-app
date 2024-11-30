import { Navbar, Container, Nav } from "react-bootstrap"
import { GiCheckMark } from "react-icons/gi"
import { Link } from "react-router-dom"

import './STNavbar.scss'

const STNavbar = () => {
    return (
        <Navbar className="STNavbar" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/"><GiCheckMark /> SuccessTracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="">
                        <Nav.Link as={Link} to="/">Главная</Nav.Link>
                        <Nav.Link href="#link">FAQ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default STNavbar