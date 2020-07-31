import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { auth } from '../firebase/utils';




function NavbarF({ currentUser = null}) {
  return (
    <>


      <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" >
        <Link to="/">
          <Navbar.Brand >Ken Soda</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/about" >
              About Us
            </Link>
          </Nav>
          <Nav className="mr-3">{currentUser ?
           
              <span onClick={() => auth.signOut()}>
                LogOut
              </span>
           
             :
            <Link to="/login" >
              Sign in
            </Link>}
            </Nav>

            <Nav>
            <Link to="/cart" >
             
                <svg width="1em" height="1em" viewBox="0 0 16 16" clasNames="bi bi-basket" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.243 1.071a.5.5 0 0 1 .686.172l3 5a.5.5 0 1 1-.858.514l-3-5a.5.5 0 0 1 .172-.686zm-4.486 0a.5.5 0 0 0-.686.172l-3 5a.5.5 0 1 0 .858.514l3-5a.5.5 0 0 0-.172-.686z" />
                  <path fillRule="evenodd" d="M1 7v1h14V7H1zM.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H.5z" />
                  <path fillRule="evenodd" d="M14 9H2v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9zM2 8a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H2z" />
                  <path fillRule="evenodd" d="M4 10a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                </svg>
              
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    </>
  )
}

export default NavbarF;