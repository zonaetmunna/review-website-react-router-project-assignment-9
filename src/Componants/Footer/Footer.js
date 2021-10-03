import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
     return (
          <div className="bg-dark text-white ">

               <Container className="text-center p-3 ">
                    <Row>
                         <Col sm={6} md={4} lg={4}>
                              <div className="m-3">
                                   <h3>ABOUT</h3>
                                   <p>Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel, rutrum eu ipsum. Mauris accumsan eros eget libero posuere vulputate.</p>
                              </div>
                         </Col>
                         <Col sm={6} md={4} lg={4}>
                              <div className="m-3">
                                   <h3>Contact</h3>
                                   <p>USA, Callifornia 20, First Avenue, Callifornia</p>
                                   <p>info@masterstudy.com
                                   </p>
                              </div>
                         </Col>
                         <Col sm={6} md={4} lg={4}>
                              <div className="m-3">
                                   <h3>Socaiel</h3>
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