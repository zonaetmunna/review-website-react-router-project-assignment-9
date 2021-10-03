import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
     return (
          <div>

               <Container>

                    <Row>
                         <Col xs={12} md={8}>
                              <div>
                                   <h1>About us</h1>
                                   <p>Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel, rutrum eu ipsum. Mauris accumsan eros eget libero posuere vulputate Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, repellat!</p>
                              </div>
                              <div>
                                   <h1>Contact us</h1>
                                   <p>USA, Callifornia 20, First Avenue, Callifornia</p>
                                   <p>Email : info@masterstudy.com </p>
                              </div>
                         </Col>
                         <Col xs={6} md={4}>
                              xs=6 md=4
                         </Col>
                    </Row>
               </Container>


          </div>
     );
};

export default About;