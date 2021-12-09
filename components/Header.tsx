import React from 'react';
import config from '../config/config';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href={ config.base + "/" }><img src={ config.base + "/ether.svg" } width="50" height="50" alt="Ether Operating System" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-bar" />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href={ config.base + "/" }>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://github.com/hakonmagnus/ether">GitHub</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={ config.base + "/features" }>Features</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={ config.base + "/versions" }>Versions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={ config.base + "/downloads" }>Downloads</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={ config.base + "/documentation" }>Documentation</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}