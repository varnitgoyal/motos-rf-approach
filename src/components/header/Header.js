import React, { Component } from 'react';
import '../../mainstylesheet/mainstyle.css';
import Logo from '../../images/logo.png';
import { Navbar, Nav, Form, } from 'react-bootstrap';
class Header  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <header>
                <Navbar className="container" bg="light" variant="light">
                    <Navbar.Brand href="#home"><img  className="logo-image" src={Logo} alt="Logo"/></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#customers">Customers</Nav.Link>
                        <Nav.Link href="#reports">Reports</Nav.Link>
                        <Nav.Link href="#help-center">Help Center</Nav.Link>
                    </Nav>
                    <Form inline>
                        <span className="search-icon"><i className="fas fa-search"></i></span>
                        <span className="profile"><i className="fas fa-user-circle"></i></span>
                    </Form>
                </Navbar>
            </header>
        );
    }
}

export default Header;