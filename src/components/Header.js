import React from 'react'
import { withRouter } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FirebaseContext } from '../firebase'


function Header() {

    const {user, firebase} = React.useContext(FirebaseContext)

    return (
            <Navbar collapseOnSelect variant="dark" fixed='top' expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">CodeSpace</Nav.Link>
                <Nav.Link href="/recents">recents</Nav.Link>
                <Nav.Link href="/liked">liked</Nav.Link>

                {user ? (
                    <>
                        <NavDropdown title={user.displayName} id="collasible-nav-dropdown">
                        <NavDropdown.Item href={`/${user.email}`}>my profile</NavDropdown.Item>
                        <NavDropdown.Item href='/create'>Create new</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => firebase.logout()}>logout</NavDropdown.Item>
                </NavDropdown>
                    </>
                    ) : <Nav.Link href="/login" className="header-link">
                    login
                    </Nav.Link>}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default withRouter(Header);