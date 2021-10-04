import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Image from '../../image/banner.png'
import Main from '../Main/Main';
import { useHistory } from 'react-router-dom'


const Home = () => {
     const history = useHistory()
     const handleOnCurse = () => {
          history.push("/courses")

     }

     return (
          <div className="">
               {/* header part */}
               <Container className="p-3 mt-4 mb-5">
                    <Row className="">
                         {/* header details */}
                         <Col sm={6}>
                              <div className="ms-2 p-5">

                                   <h1>Limitless learning, more possibilities</h1>
                                   <p>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.</p>
                                   <Button onClick={handleOnCurse}>Start a course</Button>

                              </div>
                         </Col>
                         {/* headder thumbnail */}
                         <Col sm={6}>
                              <div>
                                   <img src={Image} className="img-fluid" alt="" />
                              </div>
                         </Col>
                    </Row>
               </Container>

               {/* main componant for course detials */}
               <Main></Main>

          </div>
     );
};

export default Home;