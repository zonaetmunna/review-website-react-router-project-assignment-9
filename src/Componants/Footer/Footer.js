import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
     return (
          <div className="bg-dark text-white ">

               <Container className=" p-3 mt-5">
                    <Row>
                         {/* about part */}
                         <Col sm={6} md={4} lg={4}>
                              <div className="m-3 p-2">
                                   <h3 className="text-primary text-center">ABOUT</h3>
                                   <p>Masterstudy is Education WordPress theme featured by Learning Management System (LMS) for online education.
                                        Developed by StylemixThemes.</p>
                              </div>
                         </Col>

                         {/* contact part */}
                         <Col sm={6} md={4} lg={4}>
                              <div className="m-3 p-2">
                                   <h3 className="text-primary text-center">Contact</h3>
                                   <p>USA, Callifornia 20, First Avenue, Callifornia </p>
                                   <p>info@masterstudy.com
                                   </p>
                              </div>
                         </Col>

                         {/* socail part */}
                         <Col sm={6} md={4} lg={4}>
                              <div className="m-3 text-center p-2">
                                   <h3 className="text-primary text-center">Socaiel</h3>
                                   <i class="fab fa-facebook-f ms-3"></i>
                                   <i class="fab fa-github  ms-3"></i>
                              </div>
                         </Col>
                    </Row>
               </Container>

          </div>
     );
};

export default Footer;