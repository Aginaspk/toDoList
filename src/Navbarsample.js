import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Navbarsample({nav}) {

    return (
        <>
            <Navbar expand="lg" className='bg-body-tertiary'>
                <Container>
                    <Navbar.Brand>ToDoList</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='' id='home'>Home</Nav.Link>
                            <Nav.Link href='' id='footer'>Footer</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    )
}
