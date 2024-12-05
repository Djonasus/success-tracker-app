import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { GiCheckMark } from "react-icons/gi"
import { Link } from "react-router-dom"

import './STNavbar.scss'
import { SiDependabot } from "react-icons/si"

const STNavbar = () => {
    return (
        <Navbar className="STNavbar" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/"><GiCheckMark /> SuccessTracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="">
                        <Nav.Link as={Link} to="/">Главная</Nav.Link>
                        <Nav.Link as={Link} to="/courses">Курсы</Nav.Link>
                        <Nav.Link href="#link">FAQ</Nav.Link>
                        <Nav.Link as={Link} to="/maxim"><SiDependabot /> Максим</Nav.Link>
                        {/* <Button as={Link} to="/maxim"><SiDependabot /> Максим</Button> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default STNavbar