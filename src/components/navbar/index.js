import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'


function NavBar() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand href="#home"  >
                             Employee Directory 
                                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}
export default NavBar;