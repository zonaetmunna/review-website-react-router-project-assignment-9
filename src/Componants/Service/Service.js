import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
     const { courseName, idCourse, image, instrctor, time, CoursePay, courseDetails } = props.course;
     return (
          <div>
               <Col>
                    <Card>
                         <Card.Img variant="top" src={image} />
                         <Card.Body>
                              <Card.Title>{courseName}</Card.Title>
                              <Card.Text>{courseDetails}</Card.Text>
                              <Card.Text>{instrctor}</Card.Text>
                              <Card.Text>{idCourse}</Card.Text>
                              <Card.Text>{time}</Card.Text>
                              <Card.Text>{CoursePay}</Card.Text>
                              <Button >Add to Cart</Button>
                         </Card.Body>
                    </Card>
               </Col>

          </div>
     );
};

export default Service;