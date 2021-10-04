import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = (props) => {
     const { courseName, idCourse, image, instrctor, time, courseDetails } = props.course;
     const history = useHistory()

     const handleDetails = () => {
          history.push(`/course/${idCourse}`)
     }

     return (
          <div>
               <Col className="shadow-lg hover">
                    <Card className="p-3">
                         <Card.Img variant="top" src={image} />
                         <Card.Body>
                              <Card.Title>{courseName}</Card.Title>
                              <Card.Text>{courseDetails}</Card.Text>
                              <Card.Text className="text-primary">Instractor : {instrctor}</Card.Text>
                              <Card.Text className="text-primary">Course-duration : {time}</Card.Text>
                              <Button onClick={handleDetails} className="ms-2">Details</Button>
                         </Card.Body>
                    </Card>
               </Col>

          </div>
     );
};

export default Service;