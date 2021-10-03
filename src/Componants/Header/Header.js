import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <div className="">
               <Navbar collapseOnSelect expand="lg" bg="dark" className="p-4" variant="dark">
                    <h1 className="text-primary ">DEVELOPMENT LEARNING</h1>
                    <Container>

                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   <Link to='/home' className="m-2 text-white text-decoration-none">Home</Link>
                                   <Link to='/services' className="m-2 text-white text-decoration-none">Services</Link>
                                   <Link to="/blogs" className="m-2 text-white text-decoration-none">Blogs</Link>
                                   <Link to="/about" className="m-2 text-white text-decoration-none">About</Link>

                              </Nav>
                              <Form className="d-flex">
                                   <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                   />
                                   <Button variant="outline-success">Search</Button>
                              </Form>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>

          </div>
     );
};

export default Header;