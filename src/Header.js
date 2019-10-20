import React, {Component} from 'react';
import {Navbar, NavbarBrand} from "reactstrap";

class Header extends Component {
    render() {
        return (
            <Navbar color="dark" className="navbar-dark">
                <NavbarBrand className="navbar-light">Will It Connect?</NavbarBrand>
            </Navbar>
        );
    }
}

export default Header;