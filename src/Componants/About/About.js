

import { Col, Container, Row } from 'react-bootstrap';


const About = () => {

     return (
          <div>

               <Container className="p-5">

                    <Row>
                         <Col xs={12} md={8}>
                              <div>
                                   <h1>About us</h1>
                                   <p>Masterstudy is Education WordPress theme featured by Learning Management System (LMS) for online education.
                                        Developed by StylemixThemes.
                                        Our user experience ideals run through every vein of our company. Our ideals are not to attain perfection, but rather to attain pleasure. Using our product should feel enjoyable - like playing a game - it should be easy, exciting and uplifting. Something to try and subsequently to learn from. This is the same experience our employees have working for us.</p>
                              </div>
                              <div>
                                   <h1>Contact us</h1>
                                   <p>USA, Callifornia 20, First Avenue, Callifornia</p>
                                   <p>Email : info@masterstudy.com </p>
                              </div>
                         </Col>
                         <Col xs={6} md={4}>
                              <div className="text-center">


                              </div>
                         </Col>
                    </Row>
               </Container>


          </div>
     );
};

export default About;