import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppContext from './context'



function HeaderContainer(props) {
    const context = React.useContext(AppContext)
    return (
        <bs.Navbar variant="dark" expand="lg">
            <Link to="/">
                <bs.Navbar.Brand>
                    <img alt="Site Icon" src="/media/sun.png" style={{width: 50}} className="imgRound"/>
                    &nbsp;&nbsp;&nbsp;GoFundWe
                </bs.Navbar.Brand>
            </Link>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav">
                <bs.Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/help" className="nav-link">Help</Link>
                </bs.Nav>
                <bs.Nav>
                    <bs.NavDropdown title="Welcome, Conner" alignRight>
                        <bs.NavDropdown.Item>My Account</bs.NavDropdown.Item>
                        <bs.NavDropdown.Divider />
                        <bs.NavDropdown.Item href="#action/3.4">Logout</bs.NavDropdown.Item>
                    </bs.NavDropdown>
                </bs.Nav>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}
export default HeaderContainer