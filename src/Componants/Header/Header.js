import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
     const activeStyle = {
          fontWeight: "bold",
          color: "blue"
     }
     return (
          <div className="">
               <Navbar collapseOnSelect expand="lg" bg="dark" className="p-4" variant="dark">
                    <h1 className="text-primary ">DEVELOPMENT LEARNING</h1>
                    <Container>

                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   <NavLink to='/home' activeStyle={activeStyle} className="m-2 text-white text-decoration-none">Home</NavLink>
                                   <NavLink to='/courses' activeStyle={activeStyle} className="m-2 text-white text-decoration-none">Courses</NavLink>
                                   <NavLink to="/blogs" activeStyle={activeStyle} className="m-2 text-white text-decoration-none">Blogs</NavLink>
                                   <NavLink to="/about" activeStyle={activeStyle} className="m-2 text-white text-decoration-none">About</NavLink>

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