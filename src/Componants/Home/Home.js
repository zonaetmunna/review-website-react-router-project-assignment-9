import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Image from '../../image/banner.png'


const Home = () => {

     return (
          <div>

               <Container>
                    <Row className="">
                         <Col sm={6}>
                              <div className="ms-5">

                                   <h1>Limitless learning, more possibilities</h1>
                                   <p>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.</p>
                                   <Button>Join for free</Button>

                              </div>
                         </Col>
                         <Col sm={6}>
                              <div>
                                   <img src={Image} className="img-fluid" alt="" />
                              </div>
                         </Col>
                    </Row>



               </Container>




          </div>
     );
};

export default Home;