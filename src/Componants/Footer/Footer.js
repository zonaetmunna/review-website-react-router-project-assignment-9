import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
     return (
          <div className="bg-dark text-white ">

               <Container className="text-center p-3 ">
                    <Row>
                         <Col sm>
                              <div className="m-3">
                                   <h1>ABOUT</h1>
                                   <p>Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel, rutrum eu ipsum. Mauris accumsan eros eget libero posuere vulputate.</p>
                              </div>
                         </Col>
                         <Col sm>
                              <div className="m-3">
                                   <h1>Contact</h1>
                                   <p>USA, Callifornia 20, First Avenue, Callifornia</p>
                                   <p>info@masterstudy.com
                                   </p>
                              </div>
                         </Col>
                         <Col sm>
                              <div className="m-3">
                                   <i class="fab fa-facebook-f "></i>
                                   <i class="fab fa-github"></i>
                              </div>
                         </Col>
                    </Row>
               </Container>

          </div>
     );
};

export default Footer;