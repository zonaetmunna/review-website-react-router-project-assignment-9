import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Aside = () => {
     return (
          <div>

               <Container className="bg-light">
                    <Row xs={2} md={4} lg={4}>
                         <Col className="">
                              <h3>Business</h3>
                         </Col>
                         <Col>
                              <h3>Design</h3>
                         </Col>
                         <Col>
                              <h3>Development</h3>
                         </Col>
                         <Col>
                              <h3>Productivity</h3>
                         </Col>
                    </Row>
               </Container>

          </div>
     );
};

export default Aside;